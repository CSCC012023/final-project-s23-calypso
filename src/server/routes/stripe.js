// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_KEY);
const express = require('express');
const app = express();
app.use(express.static('public'));
require("dotenv").config();

const router = express.Router()

const YOUR_DOMAIN = 'http://localhost:3000';

router.post('/create-checkout-session', async (req, res) => {
  //creates a checkout session  
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    //when the payment is succesful take the cusotmer to this page
    success_url: `${YOUR_DOMAIN}/checkout-success`,
    //if the payment is not successful take the customer to this page
    cancel_url: `${YOUR_DOMAIN}/home`,
    automatic_tax: {enabled: true},
  });

  res.send({url: session.url });
});
module.exports = router;
app.listen(4242, () => console.log('Running on port 4242'));