import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, CreditCard, Shield, Download, Zap, Smartphone } from 'lucide-react';
import { toast } from 'sonner';

// Payment configuration
// Stripe (Currently under review - uncomment when ready)
// const STRIPE_CHECKOUT_URL =
//   import.meta.env.VITE_STRIPE_CHECKOUT_URL ||
//   'https://buy.stripe.com/your-checkout-link';

// Razorpay configuration (Active)
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_XXXXXXXXXX';
const RAZORPAY_AMOUNT = import.meta.env.VITE_RAZORPAY_AMOUNT || 2900; // Amount in cents ($29)
const RAZORPAY_CURRENCY = import.meta.env.VITE_RAZORPAY_CURRENCY || 'USD';

export default function StripeCheckout() {
  const [isLoading, setIsLoading] = useState(false);
  
  // Load Razorpay script
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    setIsLoading(true);

    // Track checkout event (optional)
    if (window.gtag) {
      window.gtag('event', 'begin_checkout', {
        value: 29.0,
        currency: 'USD',
        items: [
          {
            item_id: 'react-theme-system-kit',
            item_name: 'React Theme System Kit',
            price: 29.0,
            quantity: 1,
          },
        ],
      });
    }

    // Load Razorpay
    const res = await loadRazorpay();
    
    if (!res) {
      toast.error('Razorpay SDK failed to load. Please check your connection.');
      setIsLoading(false);
      return;
    }

    // Razorpay options
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: RAZORPAY_AMOUNT,
      currency: RAZORPAY_CURRENCY,
      name: 'React Theme System Kit',
      description: 'Complete theme system with 8 themes and 45+ components',
      image: '/favicon.webp', // Your logo
      handler: function (response) {
        // Payment successful
        toast.success('Payment successful! Redirecting to download...');
        // In production, verify payment on backend and redirect to download
        window.location.href = `/download?payment_id=${response.razorpay_payment_id}`;
      },
      prefill: {
        // Pre-fill customer details if available
        email: '',
        contact: '',
      },
      theme: {
        color: '#10b981', // Your primary color
      },
      modal: {
        ondismiss: function() {
          setIsLoading(false);
        }
      }
    };

    // Open Razorpay checkout
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    
    // Stripe code (keep for future use)
    // window.location.href = STRIPE_CHECKOUT_URL;
  };

  const features = [
    'All 8 professional themes',
    '45+ shadcn/ui components',
    'Lifetime updates',
    'Export in 4 formats',
    'Dark/Light mode',
    'Source code access',
    'Commercial license',
    'Email support',
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border-2">
        <CardHeader className="text-center pb-8">
          <Badge className="w-fit mx-auto mb-4" variant="secondary">
            One-time payment
          </Badge>
          <CardTitle className="text-3xl font-bold">
            React Theme System Kit
          </CardTitle>
          <CardDescription className="text-lg">
            Everything you need to build beautiful, themed React applications
          </CardDescription>
          <div className="mt-6">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold">$29</span>
              <span className="text-muted-foreground line-through text-lg ml-2">$79</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Features list */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Security badges */}
          <div className="flex items-center justify-center gap-6 py-4 border-y">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>Secure checkout</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="h-4 w-4" />
              <span>All major cards accepted</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="w-full text-lg"
            onClick={handleCheckout}
            disabled={isLoading}
          >
            {isLoading ? (
              <>Processing...</>
            ) : (
              <>
                <Zap className="mr-2 h-5 w-5" />
                Get Instant Access
              </>
            )}
          </Button>

          {/* Additional info */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              <Download className="inline h-3 w-3 mr-1" />
              Instant download after purchase
            </p>
            <p className="text-xs text-muted-foreground">
              Questions? Email devprojects.hq@gmail.com
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}