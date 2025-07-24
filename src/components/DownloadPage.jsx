import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, CheckCircle, Mail, Book, HelpCircle, Package } from 'lucide-react';
import { toast } from 'sonner';

export default function DownloadPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');

  // Get session ID from URL params
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (!sessionId) {
      setIsVerifying(false);
      return;
    }

    // In production, verify the session with your backend
    // For now, we'll simulate verification
    verifyPurchase(sessionId);
  }, [sessionId]);

  const verifyPurchase = async (sessionId) => {
    try {
      // In production: Call your backend API to verify Stripe session
      // const response = await fetch(`/api/verify-purchase/${sessionId}`);
      // const data = await response.json();
      
      // Simulated verification
      setTimeout(() => {
        setIsValid(true);
        setIsVerifying(false);
        // In production, get this from your backend
        setDownloadUrl('/downloads/react-theme-system-kit-v1.0.0.zip');
        toast.success('Purchase verified! Your download is ready.');
      }, 1500);
    } catch (error) {
      console.error('Verification failed:', error);
      setIsVerifying(false);
      toast.error('Could not verify purchase. Please contact support.');
    }
  };

  const handleDownload = () => {
    // Track download event
    if (window.gtag) {
      window.gtag('event', 'download', {
        event_category: 'engagement',
        event_label: 'theme-kit-download'
      });
    }

    // In production, this would be a signed URL from your backend
    window.location.href = downloadUrl;
    toast.success('Download started!');
  };

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
              <p className="text-muted-foreground">Verifying your purchase...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!sessionId || !isValid) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-destructive">Invalid Download Link</CardTitle>
            <CardDescription>
              This download link is invalid or has expired.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <HelpCircle className="h-4 w-4" />
              <AlertDescription>
                If you've just made a purchase, please check your email for the download link.
                If you continue to have issues, contact support@reactthemesystem.com with your order ID.
              </AlertDescription>
            </Alert>
            <Button onClick={() => navigate('/')} className="w-full">
              Return to Homepage
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Success message */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl font-bold">Thank You for Your Purchase!</h1>
          <p className="text-xl text-muted-foreground">
            Your React Theme System Kit is ready to download
          </p>
        </div>

        {/* Download card */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              React Theme System Kit v1.0.0
            </CardTitle>
            <CardDescription>
              Complete source code with all themes and components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-3">Package includes:</p>
              <ul className="text-sm space-y-1">
                <li>• Full source code (React + Vite + Tailwind v4)</li>
                <li>• 8 professional color themes</li>
                <li>• 45+ shadcn/ui components</li>
                <li>• Theme export tools</li>
                <li>• Comprehensive documentation</li>
                <li>• Commercial license</li>
              </ul>
            </div>

            <Button 
              size="lg" 
              className="w-full" 
              onClick={handleDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              Download ZIP File (2.3 MB)
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              This download link will expire in 7 days. 
              A copy has also been sent to your email.
            </p>
          </CardContent>
        </Card>

        {/* Next steps */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Book className="h-4 w-4" />
                Getting Started
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>1. Unzip the downloaded file</p>
              <p>2. Run <code className="text-xs bg-muted px-1 py-0.5 rounded">npm install</code></p>
              <p>3. Start with <code className="text-xs bg-muted px-1 py-0.5 rounded">npm run dev</code></p>
              <p>4. Open <code className="text-xs bg-muted px-1 py-0.5 rounded">http://localhost:5173</code></p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Check the README.md file</p>
              <p>• Read the docs in /docs folder</p>
              <p>• Email: support@reactthemesystem.com</p>
              <p>• Include your Order ID for faster support</p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center pt-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}