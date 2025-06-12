import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <GlassmorphismCard intensity="low" className="prose dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to NeuroFlo LLC ("Company", "we", "our", "us"). These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at [website URL] and our agentic AI platform (together or individually "Service") operated by NeuroFlo LLC.
            </p>
            <p>
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here: [Privacy Policy URL].
            </p>
            <p>
              Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
            </p>
            <p>
              If you do not agree with Agreements, you must not use our Service. Please contact us if you have any questions regarding Agreements.
            </p>
            
            <h2>2. Communications</h2>
            <p>
              By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.
            </p>
            
            <h2>3. Purchases</h2>
            <p>
              If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
            </p>
            <p>
              You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
            </p>
            
            <h2>4. Intellectual Property</h2>
            <p>
              Service and its original content (excluding content provided by users), features and functionality are and will remain the exclusive property of NeuroFlo LLC and its licensors. Service is protected by copyright, trademark, and other laws of the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of NeuroFlo LLC.
            </p>
            
            <h2>5. Disclaimer of Warranty</h2>
            <p>
              These services are provided by the company on an "as is" and "as available" basis. The company makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content or materials included therein.
            </p>
            
            <h2>6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            
            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:<br />
              Phone: (904) 497-1348<br />
              Email: info@neuroflo.us
            </p>
          </GlassmorphismCard>
        </div>
      </div>
    </div>
  );
}