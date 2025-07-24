# Stripe Integration Setup Guide

This guide helps you set up Stripe payments for React Theme System Kit.

## Overview

The payment flow works as follows:
1. User clicks "Get Started" → Goes to `/checkout`
2. User clicks "Get Instant Access" → Redirects to Stripe Checkout
3. After payment → Stripe redirects to `/download?session_id=xxx`
4. Download page verifies purchase and provides download link

## Setup Steps

### 1. Create Stripe Account
- Sign up at [stripe.com](https://stripe.com)
- Complete your business profile

### 2. Create a Payment Link
1. Go to [Payment Links](https://dashboard.stripe.com/payment-links)
2. Click "New" to create a payment link
3. Configure:
   - Product name: "React Theme System Kit"
   - Price: $79 USD (one-time)
   - Description: "Complete React theme system with 8 themes and 45+ components"
   - Add product image (use the og.webp from public folder)
4. In "After payment" section:
   - Select "Don't show confirmation page"
   - Add redirect: `https://yourdomain.com/download?session_id={CHECKOUT_SESSION_ID}`
5. Copy the payment link URL

### 3. Configure Frontend
1. Copy `.env.example` to `.env.local`
2. Add your Stripe checkout URL:
   ```
   VITE_STRIPE_CHECKOUT_URL=https://buy.stripe.com/your-link-here
   ```

### 4. Simple Implementation (No Backend)
For the simplest setup without a backend:

1. **Use Stripe Payment Links** (current setup)
   - Customer pays via Stripe
   - Gets redirected to download page
   - You manually send download link via email

2. **Use Gumroad** for automated delivery
   - Handles payment + file delivery
   - No backend needed

### 5. Advanced Implementation (With Backend)

If you want automatic verification and secure downloads, you'll need a backend:

#### Backend API Example (Node.js/Express)

```javascript
// /api/verify-purchase/:sessionId
app.get('/api/verify-purchase/:sessionId', async (req, res) => {
  try {
    // Verify the checkout session with Stripe
    const session = await stripe.checkout.sessions.retrieve(
      req.params.sessionId
    );
    
    if (session.payment_status === 'paid') {
      // Generate a temporary download URL (expires in 1 hour)
      const downloadUrl = generateSignedUrl('react-theme-kit.zip', {
        expires: Date.now() + 3600000 // 1 hour
      });
      
      res.json({
        success: true,
        downloadUrl,
        customerEmail: session.customer_email
      });
    } else {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

#### Stripe Webhook Handler

```javascript
// /api/stripe-webhook
app.post('/api/stripe-webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  
  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      
      // Send download email
      await sendDownloadEmail(
        session.customer_email,
        session.id
      );
    }
    
    res.json({ received: true });
  } catch (error) {
    res.status(400).send(`Webhook Error: ${error.message}`);
  }
});
```

## Environment Variables

### Frontend (.env.local)
```
VITE_STRIPE_CHECKOUT_URL=https://buy.stripe.com/xxx
VITE_API_URL=https://your-api.com
```

### Backend (.env)
```
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
DOWNLOAD_FILE_PATH=./downloads/react-theme-kit.zip
EMAIL_API_KEY=your-email-service-key
```

## Testing

### Test Cards
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- More at: https://stripe.com/docs/testing

### Test Flow
1. Use test mode in Stripe Dashboard
2. Create test payment link
3. Update `.env.local` with test URL
4. Test complete purchase flow

## Security Notes

1. **Never expose** your Stripe Secret Key in frontend code
2. **Always verify** purchases on the backend before providing downloads
3. **Use signed URLs** for download links that expire
4. **Log all transactions** for customer support

## Going Live

1. Switch to live mode in Stripe Dashboard
2. Update payment link to live version
3. Update environment variables
4. Test with a real card (you can refund yourself)

## Support

- Stripe Docs: https://stripe.com/docs
- Stripe Support: https://support.stripe.com
- Our Support: support@reactthemesystem.com