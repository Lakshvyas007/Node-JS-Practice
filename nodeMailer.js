let nodeMailer = require('nodemailer');

let transporter = nodeMailer.createTransport({
    service: 'yahoo',
    auth: {
        user: 'lakshyavyas987@yahoo.com',
        pass: 'lakshVyas@2507'
    }
});

let mailOptions = {
    from: 'lakshyavyas987@yahoo.com',
    to: 'vhr1317@gmail.com',
    subject: 'Sending email using nodeJs',
    text: 'Hello Bimdhi'
};

transporter.sendMail(mailOptions, function (error,info){
if(error){
    console.log(error);
} else{
    console.log("Email sent: " + info.response);
}
});