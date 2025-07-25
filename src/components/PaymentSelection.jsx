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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { 
  CreditCard, 
  Globe, 
  Zap, 
  Users, 
  Shield, 
  ExternalLink,
  Star,
  Check
} from 'lucide-react';

const paymentOptions = [
  {
    name: 'LemonSqueezy',
    description: 'Best for international customers',
    fee: '5% + 50¢',
    rating: 5,
    recommended: true,
    features: [
      'Handles global taxes automatically',
      'Beautiful checkout experience',
      'Instant payouts available',
      'No personal info required',
      'Subscription management',
    ],
    pros: [
      'Lower fees',
      'Professional checkout',
      'Tax compliance handled',
    ],
    url: 'https://devprojects.lemonsqueezy.com/buy/react-theme-system-kit', // TODO: Replace with your actual LemonSqueezy URL
    icon: '🍋',
    color: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
  },
  {
    name: 'Gumroad',
    description: 'Easiest and fastest setup',
    fee: '10% per sale',
    rating: 5,
    features: [
      'Zero setup time',
      'Built-in marketplace',
      'Existing customer base',
      'No verification needed',
      'Simple and reliable',
    ],
    pros: [
      'Start selling immediately',
      'Huge marketplace',
      'No hassle',
    ],
    url: 'https://gumroad.com/l/react-theme-system-kit', // TODO: Replace with your actual Gumroad URL
    icon: '🛍️',
    color: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
  },
];

export default function PaymentSelection() {
  const [isOpen, setIsOpen] = useState(true);

  const handlePaymentChoice = (option) => {
    // Track the choice
    if (window.gtag) {
      window.gtag('event', 'payment_platform_selected', {
        platform: option.name,
        value: 29.0,
        currency: 'USD',
      });
    }
    
    // Redirect to the chosen platform
    window.location.href = option.url;
  };

  return (
    <>
      {/* Page version */}
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Choose Your Payment Method</h1>
            <p className="text-muted-foreground">
              Both options are secure and instant. Pick the one that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {paymentOptions.map((option) => (
              <Card 
                key={option.name} 
                className={`relative hover:shadow-lg transition-all ${
                  option.recommended ? 'border-2 ' + option.borderColor : ''
                }`}
              >
                {option.recommended && (
                  <Badge className="absolute -top-3 left-4">Recommended</Badge>
                )}
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-lg ${option.color} flex items-center justify-center text-2xl`}>
                      {option.icon}
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(option.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-3">{option.name}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                  <Badge variant="secondary" className="mt-2 w-fit">
                    Fee: {option.fee}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {option.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant={option.recommended ? "default" : "outline"}
                    onClick={() => handlePaymentChoice(option)}
                  >
                    Pay with {option.name}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="space-y-1">
                  <p className="font-medium">Why these platforms?</p>
                  <p className="text-sm text-muted-foreground">
                    As a solo developer, I chose platforms that don't require personal phone numbers 
                    or complex business verification. Both handle taxes, provide instant downloads, 
                    and offer excellent customer protection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Questions about payment? Email devprojects.hq@gmail.com
            </p>
            <Button variant="ghost" onClick={() => window.history.back()}>
              ← Back to previous page
            </Button>
          </div>
        </div>
      </div>

      {/* Modal version (optional) */}
      <Dialog open={false} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Choose Your Payment Method</DialogTitle>
            <DialogDescription>
              Both options are secure and instant. Pick the one that works best for you.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {paymentOptions.map((option) => (
              <Card 
                key={option.name} 
                className={`cursor-pointer hover:shadow-md transition-all ${
                  option.recommended ? 'border-2 ' + option.borderColor : ''
                }`}
                onClick={() => handlePaymentChoice(option)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{option.icon}</span>
                    {option.recommended && (
                      <Badge variant="secondary" className="text-xs">Recommended</Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{option.name}</CardTitle>
                  <CardDescription className="text-sm">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {option.pros.map((pro, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-green-500" />
                        <span className="text-xs">{pro}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <span className="text-xs text-muted-foreground">Fee: {option.fee}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}