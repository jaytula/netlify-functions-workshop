const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  if (!event.body || event.httpMethod !== 'POST') {
    return {
      statusCode: 400,
      body: JSON.stringify({
        status: 'invalid-method'
      })
    }
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1327,
    currency: "usd"
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      clientSecret: paymentIntent.client_secret
    })
  }
};