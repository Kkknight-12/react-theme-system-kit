# Razorpay Integration Setup

This guide helps you set up Razorpay payments for React Theme System Kit.

## Overview

Razorpay is integrated for accepting payments in India with support for:
- UPI payments
- Credit/Debit cards
- Net Banking
- Wallets (Paytm, PhonePe, etc.)

## Setup Steps

### 1. Create Razorpay Account

1. Sign up at [dashboard.razorpay.com](https://dashboard.razorpay.com)
2. Complete KYC verification (required for live mode)
3. Get your API keys from Dashboard → Account & Settings → API Keys

### 2. Configure Environment Variables

Update `.env.local` with your Razorpay credentials:

```bash
# Razorpay Configuration
VITE_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXX  # Your Key ID
VITE_RAZORPAY_AMOUNT=7900                 # Amount in paise (₹79)
VITE_RAZORPAY_CURRENCY=INR               # Currency
```

### 3. Test Mode

Use test credentials for development:
- Key ID starts with `rzp_test_`
- Use test cards/UPI for testing

#### Test Payment Methods:

**Test Cards:**
- Success: `4111 1111 1111 1111`
- Failure: `5105 1051 0510 5100`
- CVV: Any 3 digits
- Expiry: Any future date

**Test UPI:**
- Success: `success@razorpay`
- Failure: `failure@razorpay`

### 4. Payment Flow

1. User clicks "Get Instant Access"
2. Razorpay checkout modal opens
3. User completes payment
4. On success, redirected to `/download?payment_id=xxx`
5. Download page provides the ZIP file

### 5. Backend Verification (Recommended)

For production, verify payments on backend:

```javascript
// Example Node.js verification
const crypto = require('crypto');

app.post('/verify-payment', (req, res) => {
  const { 
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature 
  } = req.body;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac("sha256", RAZORPAY_KEY_SECRET)
    .update(sign.toString())
    .digest("hex");

  if (razorpay_signature === expectedSign) {
    // Payment verified
    res.json({ status: "success" });
  } else {
    res.status(400).json({ status: "failure" });
  }
});
```

### 6. Webhook Configuration

1. Go to Dashboard → Webhooks
2. Add webhook URL: `https://yourdomain.com/api/razorpay-webhook`
3. Select events: `payment.captured`, `payment.failed`
4. Note the webhook secret for verification

### 7. Going Live

1. Complete KYC verification
2. Get live API keys (starts with `rzp_live_`)
3. Update `.env.local` with live keys
4. Test with real payment
5. Enable auto-capture in dashboard

## Pricing

Current pricing: ₹79 (special offer, regular ₹1999)

To change price, update:
1. `.env.local` - `VITE_RAZORPAY_AMOUNT` (in paise)
2. Component display price

## International Payments

For accepting international cards:
1. Enable international payments in Razorpay dashboard
2. Complete additional compliance
3. Higher transaction fees apply (3% + GST)

## Support

- Razorpay Docs: [razorpay.com/docs](https://razorpay.com/docs)
- Razorpay Support: support@razorpay.com
- Our Support: support@reactthemesystem.com

## Switching Back to Stripe

When Stripe is approved, uncomment Stripe code in:
- `.env.local`
- `src/components/StripeCheckout.jsx`

The component supports both payment methods.