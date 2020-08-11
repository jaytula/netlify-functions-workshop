const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL, SENDGRID_SENDER_NAME } = process.env

const sgMail = require('@sendgrid/mail');

/* initialize sendgrid client */
sgMail.setApiKey(SENDGRID_API_KEY)

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body)
  const email = body.email

  console.log({email})
  try {
    const msg = {
      to: email,
      from: SENDGRID_SENDER_EMAIL,
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    const sendResult = await sgMail.send(msg);
    console.log({sendResult});

  } catch (e) {
    console.log('Error', e)
    return {
      statusCode: e.statusCode || 500,
      body: JSON.stringify({
        error: e.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `${email} added`
    })
  }
}
