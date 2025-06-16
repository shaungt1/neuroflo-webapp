import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <GlassmorphismCard intensity="low" className="prose dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome WORLD to NeuroFlo LLC's Privacy Policy. This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of our agentic AI platform and services.
            </p>
            <p>
              When you use our services, you trust us with your information. We are committed to keeping that trust. That starts with helping you understand our privacy practices.
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our services, including:
            </p>
            <ul>
              <li>Personal identifiers, such as name, email address, phone number, and organization.</li>
              <li>Professional information, such as job title and organization.</li>
              <li>Information about your use of our services.</li>
              <li>Information provided when contacting us or reporting a problem.</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>
              We use information that we collect about you or that you provide to us:
            </p>
            <ul>
              <li>To present our services and their contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights.</li>
              <li>To notify you about changes to our services.</li>
              <li>To improve our services and business operations.</li>
            </ul>
            
            <h2>4. Disclosure of Your Information</h2>
            <p>
              We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.
            </p>
            <p>
              We may disclose personal information that we collect or you provide as described in this privacy policy:
            </p>
            <ul>
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of NeuroFlo LLC's assets.</li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>For any other purpose disclosed by us when you provide the information.</li>
              <li>With your consent.</li>
              <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
              <li>To enforce or apply our terms of use and other agreements.</li>
              <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of NeuroFlo LLC, our customers, or others.</li>
            </ul>
            
            <h2>5. Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.
            </p>
            <p>
              Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our services. Any transmission of personal information is at your own risk.
            </p>
            
            <h2>6. Changes to Our Privacy Policy</h2>
            <p>
              It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page.
            </p>
            
            <h2>7. Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:<br />
              Phone: (904) 497-1348<br />
              Email: info@neuroflo.us
            </p>
          </GlassmorphismCard>
        </div>
      </div>
    </div>
  );
}