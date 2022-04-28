const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = require('twilio')(accountSid, authToken)

exports.sendSms = async (to, body) => {
  try {
    await client.messages.create({
      body,
      to,
      from: process.env.TWILIO_PHONE_NUMBER
    }).then(message => console.log(message.sid))
  } catch (error) {
    console.error(error)
  }
}
