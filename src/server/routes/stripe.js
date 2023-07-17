const express = require("express");
const Stripe = require("stripe");

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router()

//post request to endpoint
router.post('/create-checkout-session', async (req, res) => {
    //creating a checout session
    const session = await stripe.checkout.sessions.create({
    
    //line items means cart items. It is an array of cart items
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      // when the payment is successful redirect to this page
      success_url: '${process.env.CLIENT_URL}/checkout-success',
      //when the payment is cancelled or unsuccessful redirect to this page
      cancel_url: '${process.env.CLIENT_URL}/cart',
    });
  
    res.send({url: session.url});
  });

  module.exports = router;