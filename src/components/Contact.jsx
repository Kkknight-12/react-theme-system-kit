import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Clock, FileText, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router';

export default function Contact() {
  const contactEmail = "devprojects.hq@gmail.com";

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'For technical questions and support',
      action: contactEmail,
      actionText: 'Send Email',
      href: `mailto:${contactEmail}`,
    },
    {
      icon: MessageSquare,
      title: 'Purchase Support',
      description: 'Issues with buying or downloading',
      actionText: 'Gumroad Support',
      href: 'https://help.gumroad.com',
    },
    {
      icon: FileText,
      title: 'Refund Policy',
      description: 'View our refund and cancellation policy',
      actionText: 'View Policy',
      href: '/terms#refunds',
    },
  ];

  const supportInfo = [
    {
      icon: Clock,
      label: 'Response Time',
      value: '48-72 hours',
    },
    {
      icon: Mail,
      label: 'Support Email',
      value: contactEmail,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      disabled: true, // Update when you have a GitHub repo
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      disabled: true, // Update when you have a Twitter
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild>
            <Link to="/">← Back to Home</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Need help with React Theme System Kit? We're here to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className="relative">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <CardTitle>{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {method.href ? (
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        disabled={method.disabled}
                        asChild={!method.disabled}
                      >
                        {method.disabled ? (
                          method.actionText
                        ) : (
                          <a href={method.href}>
                            {method.actionText}
                          </a>
                        )}
                      </Button>
                    ) : (
                      <p className="text-sm font-medium">{method.action}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Info */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Support Information</h2>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {supportInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.label} className="flex items-start gap-3">
                        <Icon className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-primary-500/10 rounded-lg">
                  <p className="text-sm">
                    <strong>Before contacting support:</strong> Please check the documentation 
                    and ensure you're using the latest version of the theme system.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What to Include */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>When Contacting Support</CardTitle>
                <CardDescription>
                  To help us assist you better, please include:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Your order number from Gumroad/LemonSqueezy
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Description of the issue you're experiencing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Screenshots or error messages (if applicable)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Browser and operating system information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Steps to reproduce the issue
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}