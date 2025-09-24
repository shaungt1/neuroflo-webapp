/**
 * Split a PDF into per-page PDFs, and also to PNG images if Poppler is installed.
 * Usage:
 *   node scripts/split-pitchdeck.js
 *
 * Before running:
 *   npm i pdf-lib
 *   Ensure Poppler's "pdftoppm" is on PATH if you want PNGs too (optional).
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { PDFDocument } = require('pdf-lib');

/* =========================
   CONFIG: edit these paths
   ========================= */
const INPUT_PDF = path.join('public', 'pitchdeck', 'neuroflo_pitchdeck_2025.pdf');
const OUTPUT_DIR = path.join('public', 'pitchdeck', 'split');
const EXPORT_PNGS = true;   // set to false if you only want PDFs
const PNG_DPI = 200;        // image resolution for pdftoppm

/* =========================
   Utilities
   ========================= */
function ensureCleanDir(dir) {
  try {
    fs.rmSync(dir, { recursive: true, force: true });
  } catch (_) {}
  fs.mkdirSync(dir, { recursive: true });
}

function hasPdftoppm() {
  try {
    execFileSync(process.platform === 'win32' ? 'where' : 'which', ['pdftoppm'], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function zero(n, width = 3) {
  return String(n).padStart(width, '0');
}

/* =========================
   Split to per-page PDFs
   ========================= */
async function splitToPdfs(inputPath, outDir) {
  const bytes = fs.readFileSync(inputPath);
  const src = await PDFDocument.load(bytes);
  const total = src.getPageCount();

  for (let i = 0; i < total; i++) {
    const dst = await PDFDocument.create();
    const [page] = await dst.copyPages(src, [i]);
    dst.addPage(page);
    const pdfBytes = await dst.save();
    const outPath = path.join(outDir, `page-${zero(i + 1)}.pdf`);
    fs.writeFileSync(outPath, pdfBytes);
    process.stdout.write(`PDF  -> ${outPath}\n`);
  }

  return total;
}

/* =========================
   Split to PNGs with Poppler
   ========================= */
function splitToPngsWithPoppler(inputPath, outDir, dpi) {
  const prefix = path.join(outDir, '__tmp_page'); // temporary prefix
  // pdftoppm -png -r 200 input.pdf outprefix
  execFileSync('pdftoppm', ['-png', '-r', String(dpi), inputPath, prefix], { stdio: 'inherit' });

  // Rename __tmp_page-1.png to page-001.png consistently
  const files = fs.readdirSync(outDir)
    .filter(f => f.startsWith('__tmp_page-') && f.endsWith('.png'))
    .sort((a, b) => {
      const na = parseInt(a.replace('__tmp_page-', '').replace('.png', ''), 10);
      const nb = parseInt(b.replace('__tmp_page-', '').replace('.png', ''), 10);
      return na - nb;
    });

  files.forEach((file, idx) => {
    const newName = `page-${zero(idx + 1)}.png`;
    fs.renameSync(path.join(outDir, file), path.join(outDir, newName));
    process.stdout.write(`PNG  -> ${path.join(outDir, newName)}\n`);
  });
}

/* =========================
   Main
   ========================= */
(async () => {
  // 1) Validate input
  if (!fs.existsSync(INPUT_PDF)) {
    console.error(`Input PDF not found: ${INPUT_PDF}`);
    process.exit(1);
  }

  // 2) Clean output dir
  ensureCleanDir(OUTPUT_DIR);
  console.log(`Cleaned: ${OUTPUT_DIR}`);

  // 3) Split into PDFs
  const total = await splitToPdfs(INPUT_PDF, OUTPUT_DIR);
  console.log(`Wrote ${total} per-page PDFs.`);

  // 4) Optionally split into PNGs if Poppler is installed
  if (EXPORT_PNGS) {
    if (hasPdftoppm()) {
      splitToPngsWithPoppler(INPUT_PDF, OUTPUT_DIR, PNG_DPI);
      console.log(`Wrote PNGs via pdftoppm at ~${PNG_DPI} DPI.`);
    } else {
      console.warn('pdftoppm not found on PATH. Skipping PNG export. Install Poppler to enable images.');
    }
  }

  console.log('Done.');
})().catch(err => {
  console.error(err);
  process.exit(1);
});
// Install: npm install react-pdf pdfjs-dist 
// npm i pdf-lib
// node scripts/split-pitchdeck.js