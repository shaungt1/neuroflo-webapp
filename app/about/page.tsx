import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>

      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About NeuroFlo</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The Premier Agentic AI Platform for Mission-Critical Operations
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <GlassmorphismCard intensity="medium" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-4">
                  NeuroFlo is a healthcare-first AI platform that converts
                  operative notes into codes, clean claims, and research-grade
                  insights on a compliant foundation. We help surgeons, coders,
                  and administrators move from narrative documentation to
                  auditable decisions, faster reimbursements, and measurable
                  outcomes. Our focus is simple: document once, generate
                  evidence-linked coding, validate against payer policy, and
                  surface live KPIs without adding work to the clinical day.
                  When required, the same platform extends to government
                  healthcare programs with the same security, traceability, and
                  integration discipline.
                </p>
                <p className="text-muted-foreground">
                  Unlike conventional AI systems, NeuroFlo is not a tool for
                  customers to configure themselves—it's a bespoke, end-to-end
                  solution crafted by our expert team of AI engineers, PhD
                  researchers, expert UI/UX designers, and compliance
                  specialists. We deliver custom-built, agentic AI experiences
                  tailored to the unique challenges of regulated industries,
                  ensuring seamless integration, unparalleled accuracy, and
                  absolute trustworthiness.
                </p>
              </GlassmorphismCard>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <GlassmorphismCard intensity="low" hoverEffect={true}>
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Compliance First
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Built from the ground up to meet HIPAA, CJIS, FedRAMP, and
                    other regulatory requirements.
                  </p>
                </GlassmorphismCard>

                <GlassmorphismCard intensity="low" hoverEffect={true}>
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M21.9 8c-2.2-4.8-6.3-7-9.9-7-3.6 0-7.7 2.2-9.9 7-2 4.8-2 9.2 0 14 2.2 4.8 6.3 7 9.9 7 3.6 0 7.7-2.2 9.9-7 2-4.8 2-9.2 0-14Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expert-Led</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team of AI specialists builds each deployment, ensuring
                    optimal performance and reliability.
                  </p>
                </GlassmorphismCard>

                <GlassmorphismCard intensity="low" hoverEffect={true}>
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M3 3v18h18"></path>
                      <path d="m19 9-5 5-4-4-3 3"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
                  <p className="text-muted-foreground text-sm">
                    We deliver not just technology, but measurable outcomes
                    tailored to your mission-critical operations.
                  </p>
                </GlassmorphismCard>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Core Technology</h2>
              <GlassmorphismCard intensity="medium" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  The Agentic Architecture
                </h3>
                <p className="text-muted-foreground mb-6">
                  At the heart of NeuroFlo lies its agentic architecture—a
                  sophisticated network of intelligent, autonomous agents
                  orchestrated by our expert team to tackle the most demanding
                  operational challenges. These agents are not generic bots;
                  they are purpose-built entities, each with specialized roles,
                  tools, and memory, designed to operate collaboratively or
                  independently.
                </p>
                <h4 className="font-medium mb-2">
                  How the Agentic System Works
                </h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="m5 12 5 5L20 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm">
                      Custom Agent Creation: Our team of AI experts defines and
                      deploys agents based on client-specific use cases.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="m5 12 5 5L20 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm">
                      Contextual Intelligence: Agents infer context from
                      multimodal inputs using real-time and historical data.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="m5 12 5 5L20 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm">
                      Tool Integration: Each agent is equipped with custom tools
                      ensuring precise task execution.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="m5 12 5 5L20 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm">
                      Collaboration: Agents operate as a team, handing off tasks
                      seamlessly.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="m5 12 5 5L20 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm">
                      Adaptability: Through fine-tuned large language models and
                      reinforcement learning with human feedback.
                    </p>
                  </li>
                </ul>
              </GlassmorphismCard>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <GlassmorphismCard intensity="low">
                  <h3 className="text-xl font-semibold mb-4">
                    Multimodal Capabilities
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    NeuroFlo turns the data that exists in care delivery into
                    structured, verifiable intelligence teams can use
                    immediately.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500"
                        >
                          <path d="m5 12 5 5L20 7"></path>
                        </svg>
                      </div>
                      <p className="text-sm">
                        <strong>Voice:</strong> Real-time dictation and scribe
                        assist with speaker attribution and links back to the
                        note.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500"
                        >
                          <path d="m5 12 5 5L20 7"></path>
                        </svg>
                      </div>
                      <p className="text-sm">
                        <strong>Text:</strong> Op-note parsing, entity and
                        concept extraction, CPT, ICD-10, and HCPCS inference
                        with sentence-level evidence.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500"
                        >
                          <path d="m5 12 5 5L20 7"></path>
                        </svg>
                      </div>
                      <p className="text-sm">
                        <strong>Video & Devices (optional):</strong> OR cameras
                        and edge inputs for assistants, checklists, and event
                        markers that enrich post-op analytics.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500"
                        >
                          <path d="m5 12 5 5L20 7"></path>
                        </svg>
                      </div>
                      <p className="text-sm">
                        <strong>Knowledge & Data:</strong> Guideline citations,
                        payer and NCCI policy packs, EHR dictionary matching,
                        and secure exports for research.
                      </p>
                    </li>
                  </ul>
                </GlassmorphismCard>

                <GlassmorphismCard intensity="low">
                  <h3 className="text-xl font-semibold mb-4">
                    Compliance-First Design
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    NeuroFlo is engineered to meet healthcare security and audit
                    expectations from day one.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500"
                        >
                          <path d="m5 12 5 5L20 7"></path>
                        </svg>
                      </div>
                      <p className="text-sm">
                        <strong>HIPAA:</strong> Encryption in transit and at
                        rest, least-privilege access, PHI handling controls, and
                        BAAs.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500"
                        >
                          <path d="m5 12 5 5L20 7"></path>
                        </svg>
                      </div>
                      <p className="text-sm">
                        <strong>SOC 2:</strong> Security controls, change
                        management, access reviews, logging, and continuous
                        monitoring.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500"
                        >
                          <path d="m5 12 5 5L20 7"></path>
                        </svg>
                      </div>
                      <p className="text-sm">
                        <strong>Auditability & Privacy:</strong> RBAC, full
                        decision and edit history, evidence links per code, data
                        residency options, VPC or on-prem.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500"
                        >
                          <path d="m5 12 5 5L20 7"></path>
                        </svg>
                      </div>
                      <p className="text-sm">
                        <strong>Government Healthcare:</strong> Support for CJIS
                        and FedRAMP-aligned practices when deployments extend to
                        public sector environments.
                      </p>
                    </li>
                  </ul>
                </GlassmorphismCard>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Leadership Team</h2>
              <GlassmorphismCard intensity="medium">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 mb-4 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Elite Engineering</h3>
                    <p className="text-blue-400 mb-4">AI Product Design</p>
                    <p className="text-muted-foreground text-sm">
                      Our team has led the development of high-assurance AI
                      systems across defense, enterprise, and edge environments.
                      With deep experience in systems architecture, model
                      optimization, and infrastructure hardening, we build for
                      scale, speed, and security—no compromise.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 mb-4 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Expert Team</h3>
                    <p className="text-blue-400 mb-4">
                      AI Engineers & Researchers
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Our team includes PhD researchers, compliance specialists,
                      and UI/UX designers with over 20 years of combined
                      experience in secure AI systems.
                    </p>
                  </div>
                </div>
              </GlassmorphismCard>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
