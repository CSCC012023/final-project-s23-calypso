// This is your test secret API key.
const stripe = require('stripe')('sk_test_51NQvPWDVKSyjElESjvQmPSAoogLGPKNxjDORFF5GRPuIPakWRBg8X79LGKRjq5aS8ucSktZeHA3cIehlAiOEd1UW00d2r7hMiG');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1Nb8hHDVKSyjElESPDsWkQkY',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/checkout-success`,
    cancel_url: `${YOUR_DOMAIN}/checkout-unsuccessful`,
    automatic_tax: {enabled: false},
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));