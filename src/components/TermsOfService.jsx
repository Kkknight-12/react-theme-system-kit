import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export default function TermsOfService() {
  const businessName = "React Theme System Kit";
  const contactEmail = "support@yourdomain.com"; // Update this
  const lastUpdated = "January 24, 2025";

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Terms of Service</CardTitle>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </CardHeader>
          <CardContent className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>By purchasing and using {businessName}, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you do not have permission to use our products.</p>

            <h2>2. License Grant</h2>
            <p>Upon purchase, you are granted a license to use {businessName} under the following terms:</p>
            <ul>
              <li><strong>Personal/Commercial Use</strong>: You may use the product in unlimited personal and commercial projects</li>
              <li><strong>Client Projects</strong>: You may use the product in projects for your clients</li>
              <li><strong>Modification</strong>: You may modify the source code for your needs</li>
            </ul>

            <h2>3. License Restrictions</h2>
            <p>You may NOT:</p>
            <ul>
              <li>Resell, redistribute, or share the source code</li>
              <li>Create derivative products to sell or distribute</li>
              <li>Share your license with others</li>
              <li>Use the product to create a competing theme system or template</li>
              <li>Include the source code in open-source projects</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>The product is protected by copyright and other intellectual property laws. You acknowledge that all rights, title, and interest in and to the product remain with us.</p>

            <h2>5. Payment Terms</h2>
            <ul>
              <li>All payments are processed through Stripe</li>
              <li>Prices are in USD</li>
              <li>Payment is required before download access is granted</li>
              <li>All sales are final (see Refund Policy)</li>
            </ul>

            <h2>6. Refund Policy</h2>
            <p>Due to the digital nature of our products:</p>
            <ul>
              <li>We offer a 14-day money-back guarantee</li>
              <li>Refunds are granted if the product doesn't work as described</li>
              <li>No refunds after source code has been substantially used in production</li>
              <li>To request a refund, contact us with your order details</li>
            </ul>

            <h2>7. Product Updates</h2>
            <ul>
              <li>Updates are provided for bug fixes and security patches</li>
              <li>New features may be added at our discretion</li>
              <li>Updates are free for the lifetime of the product</li>
              <li>We are not obligated to provide updates indefinitely</li>
            </ul>

            <h2>8. Support</h2>
            <ul>
              <li>Basic email support is included with purchase</li>
              <li>Support covers product bugs and basic usage questions</li>
              <li>Custom development or extensive modifications are not covered</li>
              <li>Response time: typically within 48 hours</li>
            </ul>

            <h2>9. Disclaimer of Warranties</h2>
            <p>THE PRODUCT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</p>
            <ul>
              <li>MERCHANTABILITY</li>
              <li>FITNESS FOR A PARTICULAR PURPOSE</li>
              <li>NON-INFRINGEMENT</li>
            </ul>

            <h2>10. Limitation of Liability</h2>
            <p>IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE PRODUCT. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE PRODUCT.</p>

            <h2>11. Indemnification</h2>
            <p>You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use of the product or violation of these terms.</p>

            <h2>12. Termination</h2>
            <p>We may terminate your license if you violate these terms. Upon termination, you must cease using the product and destroy all copies.</p>

            <h2>13. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to conflict of law principles.</p>

            <h2>14. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.</p>

            <h2>15. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us at:</p>
            <ul>
              <li>Email: {contactEmail}</li>
              <li>Website: {businessName}</li>
            </ul>

            <h2>16. Entire Agreement</h2>
            <p>These Terms constitute the entire agreement between you and us regarding the use of {businessName} and supersede all prior agreements and understandings.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}