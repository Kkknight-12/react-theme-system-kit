# Testing Stripe Payments

## Test Mode vs Live Mode

Your current URL is in **test mode** (notice `/test_` in the URL):
```
https://buy.stripe.com/test_7sYdRbcJg6epcgmafd4ZG00
```

## Test Cards

In test mode, you MUST use Stripe's test cards. Real cards will not work!

### Successful Payment Test Cards

| Card Number | Description |
|------------|-------------|
| `4242 4242 4242 4242` | Always succeeds |
| `4000 0025 0000 3155` | Requires 3D Secure authentication |
| `4000 0000 0000 0077` | Always succeeds (non-US) |

### Failed Payment Test Cards

| Card Number | Description |
|------------|-------------|
| `4000 0000 0000 0002` | Always declines |
| `4000 0000 0000 9995` | Insufficient funds |
| `4000 0000 0000 0069` | Expired card |

### How to Fill the Form

1. **Card Number**: `4242 4242 4242 4242`
2. **Expiry Date**: Any future date (e.g., `12/25` or `04/30`)
3. **CVC**: Any 3 digits (e.g., `123`)
4. **Name**: Any name (e.g., `Test User`)
5. **ZIP/Postal Code**: Any valid format (e.g., `12345`)
6. **Email**: Any email (e.g., `test@example.com`)

## Common Issues

### "Authentication Failed"
This happens when:
- You're using a real card in test mode
- The card number is incorrect
- You're using an expired date

### "Card Declined"
This happens when:
- You're using a decline test card (like 4000 0000 0000 0002)
- The payment link has expired
- There's a configuration issue

## Testing Flow

1. Click "Get Instant Access" on `/checkout`
2. You'll be redirected to Stripe's hosted checkout
3. Use test card: `4242 4242 4242 4242`
4. Fill in any future expiry date and any 3-digit CVC
5. Complete the form
6. You should be redirected to `/download?session_id=xxx`

## Switching to Live Mode

When ready for real payments:
1. Go to Stripe Dashboard
2. Toggle from "Test" to "Live" mode
3. Create a new Payment Link in live mode
4. Update `.env.local` with the live URL (without `/test_`)
5. Test with a real card (you can refund yourself)

## Need Help?

- [Stripe Testing Documentation](https://stripe.com/docs/testing)
- [Test Card Numbers](https://stripe.com/docs/testing#cards)
- Email: support@reactthemesystem.com