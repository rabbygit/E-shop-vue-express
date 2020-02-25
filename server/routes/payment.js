var express = require('express');
var router = express.Router();

const dotenv = require('dotenv');
dotenv.config();

const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const stripe = require('stripe')(keySecret);

/* GET users listing. */
router.get('/response', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/charge', function(req, res) {
  // Create the charge object with data from the Vue.js client
  var newCharge = {
    amount: 23500,
    currency: 'usd',
    source: req.body.token_from_stripe, // obtained with Stripe.js on the client side
    description: req.body.specialNote,
    receipt_email: req.body.email,
    shipping: {
      name: req.body.name,
      address: {
        line1: req.body.address.street,
        city: req.body.address.city,
        state: req.body.address.state,
        postal_code: req.body.address.zip,
        country: 'US',
      },
    },
  };

  // Call the stripe objects helper functions to trigger a new charge
  stripe.charges.create(newCharge, function(err, charge) {
    // send response
    if (err) {
      console.error(err);
      res.json({ error: err, charge: false });
    } else {
      // send response with charge data
      res.json({ error: false, charge: charge });
    }
  });
});

router.post('/charged', (req, res) => {
  var newCharge = {
    amount: 23500,
    currency: 'usd',
    source: req.body.token_from_stripe,
  };

  stripe.customers
    .create({
      email: req.body.email,
      card: req.body.token_from_stripe,
    })
    .then(customer => {
      stripe.charges.create(newCharge, function(err, charge) {
        if (err) {
          console.error(err);
          res.json({ error: err, charge: false });
        } else {
          res.json({ error: false, charge: charge });
        }
      });
    });
});

module.exports = router;
