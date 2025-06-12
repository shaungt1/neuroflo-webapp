import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";

export default function CompliancePage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Compliance Information</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NeuroFlo's commitment to regulatory compliance and data security
            </p>
          </div>
          
          <GlassmorphismCard intensity="low" className="prose dark:prose-invert max-w-none mb-8">
            <h2>Our Compliance-First Approach</h2>
            <p>
              At NeuroFlo, compliance isn't an afterthought—it's foundational to our platform. We understand that our clients in government, military, law enforcement, and healthcare operate under strict regulatory frameworks that demand the highest standards of security, privacy, and accountability.
            </p>
            <p>
              Our agentic AI systems are engineered with compliance as a core principle, ensuring that every deployment meets or exceeds the regulatory requirements of these highly regulated industries.
            </p>
          </GlassmorphismCard>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <GlassmorphismCard intensity="medium">
              <h3 className="text-xl font-semibold mb-4">HIPAA Compliance</h3>
              <p className="text-muted-foreground mb-4">
                For healthcare deployments, NeuroFlo ensures full compliance with the Health Insurance Portability and Accountability Act:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Secure handling of Protected Health Information (PHI)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Encryption of data in transit and at rest</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Comprehensive access controls and audit trails</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Business Associate Agreements (BAAs) with clients</p>
                </li>
              </ul>
            </GlassmorphismCard>
            
            <GlassmorphismCard intensity="medium">
              <h3 className="text-xl font-semibold mb-4">CJIS Compliance</h3>
              <p className="text-muted-foreground mb-4">
                For law enforcement deployments, we adhere to Criminal Justice Information Services security policies:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Strict chain-of-custody for digital evidence</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Advanced authentication for all system access</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Secure handling of criminal justice information</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Comprehensive audit capabilities for evidentiary integrity</p>
                </li>
              </ul>
            </GlassmorphismCard>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <GlassmorphismCard intensity="medium">
              <h3 className="text-xl font-semibold mb-4">FedRAMP Compliance</h3>
              <p className="text-muted-foreground mb-4">
                For federal government deployments, we align with Federal Risk and Authorization Management Program standards:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Standardized security assessment for cloud services</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Continuous monitoring of security controls</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Risk management framework implementation</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Documentation of security policies and procedures</p>
                </li>
              </ul>
            </GlassmorphismCard>
            
            <GlassmorphismCard intensity="medium">
              <h3 className="text-xl font-semibold mb-4">Additional Compliance Capabilities</h3>
              <p className="text-muted-foreground mb-4">
                Beyond standard frameworks, NeuroFlo incorporates key compliance features:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Role-Based Access Control (RBAC) for granular permission management</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Explainable AI capabilities for regulatory transparency</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Data sovereignty options for local data processing</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-sm">Automated privacy tools for data masking and redaction</p>
                </li>
              </ul>
            </GlassmorphismCard>
          </div>
          
          <GlassmorphismCard intensity="low" className="prose dark:prose-invert max-w-none">
            <h2>Our Compliance Commitment</h2>
            <p>
              We understand that compliance requirements evolve, and our team of compliance specialists continuously monitors regulatory changes to ensure NeuroFlo stays ahead of requirements. Our expert-led approach means that each deployment is custom-built with the specific compliance needs of your organization in mind.
            </p>
            <p>
              For detailed information about how NeuroFlo can meet your specific compliance requirements, please contact our team at (904) 497-1348 or email info@neuroflo.us.
            </p>
          </GlassmorphismCard>
        </div>
      </div>
    </div>
  );
}