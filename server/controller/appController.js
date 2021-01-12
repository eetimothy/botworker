const nodemailer = require('nodemailer')
const Mailgen = require('mailgen')

const { EMAIL, PASSWORD, MAIN_URL } = require('../config')

let transporter = nodemailer.createTransport({
    service: "Yahoo",
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });
  
  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Nodemailer",
      link: MAIN_URL,
    },
  });
  
  // sign up the user .....

  // then send the email
  let response = {
    body: {
      name: 'Tim',
      intro: "Welcome to BotWorker.io! We're very excited to have you on board.",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: EMAIL,
    to: 'eetimothy@gmail.com',
    subject: "signup successful",
    html: `<h1>Thank you for signing up!</h1>`,
  };

// transporter
// .sendMail(message)
// .then(() => {
//     return res
//     .status(200)
//     .json({ msg: 'you should receive an email' })
// })
// .catch((error) => {
//     console.error(error)
// })