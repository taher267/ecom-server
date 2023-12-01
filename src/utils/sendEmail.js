// require("dotenv").config();
const { createTransport } = require("nodemailer");
const { SMTP_MAIL, SMTP_EMAIL_PASS } = process.env;
const temp = `
<h1>Bismillah</h1>
<p>Paragraph</p>
`;
/**
 *
 * @param {*} param0
 * @returns object
 */
module.exports = async function sendEmail({
  to,
  subject,
  html,
  user = SMTP_MAIL,
  pass = SMTP_EMAIL_PASS,
}) {
  let transporter = createTransport({
    host: process.env.SMTP_HOST,
    // service: "gmail",
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  return transporter.sendMail({
    from: process.env.SMTP_MAIL, // sender address
    to, // list of receivers
    subject,
    html,
  });
};
