const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const ejs = require("ejs");
const path = require("path");

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, "https://developers.google.com/oauthplayground");
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

// email send with main email
module.exports.sendMailWithGmail = async (data) => {
  const accessToken = await oAuth2Client.getAccessToken();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.SENDER_MAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  // Construct the correct file path using __dirname
  const templateFilePath = path.join(__dirname, "../views/emailTemplete.ejs");

  // Render the email template using ejs with the provided data
  const renderedHTML = await ejs.renderFile(templateFilePath, data);

  const mailData = {
    from: process.env.SENDER_MAIL,
    to: data.to,
    subject: data.subject,
    text: data.text,
    html: renderedHTML,
  };
  console.log(mailData);
  try {
    let info = await transporter.sendMail(mailData);
    return info.messageId;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }

  // return info.messageId;
};

// let info2 =await transporter.sendMail(mailData2)
