const sgMail = require("@sendgrid/mail")
const { SEND_GRID_API_KEY } = process.env

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body)
  const { name, email, subject, message } = payload

  sgMail.setApiKey(SEND_GRID_API_KEY)

  const html = `
    name: ${name}
    email: ${email}
    subject: ${subject}
    message: ${message}
  `

  const msg = {
    to: "hello@functionsnstuff.io",
    from: email,
    subject: subject,
    html: html,
  }

  try {
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: "Email sent",
    }
  } catch (err) {
    return {
      statusCode: err.code,
      body: err.message,
    }
  }
}
