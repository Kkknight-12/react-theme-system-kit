import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export default function PrivacyPolicy() {
  const businessName = "React Theme System Kit";
  const contactEmail = "devprojects.hq@gmail.com";
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
            <CardTitle className="text-3xl">Privacy Policy</CardTitle>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </CardHeader>
          <CardContent className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li>Email address (for order delivery and support)</li>
              <li>Name (for payment processing)</li>
              <li>Payment information (processed securely by Gumroad/LemonSqueezy - we never see your card details)</li>
            </ul>

            <h3>Information Automatically Collected</h3>
            <ul>
              <li>Browser type and version</li>
              <li>Time zone setting</li>
              <li>Operating system</li>
              <li>Limited location information (country)</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Process your orders and deliver digital products</li>
              <li>Send order confirmations and download links</li>
              <li>Provide customer support</li>
              <li>Send important product updates (security fixes, major updates)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Data Storage and Security</h2>
            <ul>
              <li>Payment processing is handled by Gumroad or LemonSqueezy, both secure payment processors</li>
              <li>We do not store credit card information</li>
              <li>Your personal data is only stored by the payment processor you choose</li>
              <li>We only receive your email and name for order delivery</li>
              <li>Order information is retained for tax and legal compliance</li>
            </ul>

            <h2>4. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul>
              <li><strong>Gumroad</strong>: Payment processing and delivery (<a href="https://gumroad.com/privacy" target="_blank" rel="noopener noreferrer">Gumroad's Privacy Policy</a>)</li>
              <li><strong>LemonSqueezy</strong>: Payment processing (<a href="https://www.lemonsqueezy.com/privacy" target="_blank" rel="noopener noreferrer">LemonSqueezy's Privacy Policy</a>)</li>
              <li><strong>Email Service</strong>: For sending transactional emails</li>
              <li><strong>Analytics</strong>: Basic analytics to improve our service (if applicable)</li>
            </ul>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
            </ul>

            <h2>6. Cookies</h2>
            <p>The product demo uses localStorage (not cookies) for:</p>
            <ul>
              <li>Remembering your theme preferences</li>
              <li>Saving export settings</li>
            </ul>
            <p>No tracking cookies are used.</p>

            <h2>7. Marketing Communications</h2>
            <p>We only send:</p>
            <ul>
              <li>Order confirmations and receipts</li>
              <li>Important product updates (security, major features)</li>
              <li>Support responses to your inquiries</li>
            </ul>
            <p>We do NOT send promotional emails unless you explicitly opt-in.</p>

            <h2>8. Children's Privacy</h2>
            <p>Our service is not directed to individuals under 18. We do not knowingly collect personal information from children.</p>

            <h2>9. Changes to This Policy</h2>
            <p>We may update this policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>

            <h2>10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>Email: {contactEmail}</li>
              <li>Website: {businessName}</li>
            </ul>

            <h2>11. Legal Basis for Processing</h2>
            <p>We process your data based on:</p>
            <ul>
              <li>Contract fulfillment (delivering your purchase)</li>
              <li>Legal obligations (tax records)</li>
              <li>Legitimate interests (customer support, security)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}