var MAIL_ID = "fusioncharts.tester@gmail.com",
    MAIL_PASS = "",
    TO = "",
    nodemailer = require("nodemailer"),
    program = require('commander'),    
    fs = require("fs"),
    // Read the result.html file and email the content
    html = fs.readFileSync("./index.html", {
        encoding: 'utf-8'
    }),
    subject,
    date,
    mailOptions,
    smtpTransport;

// Add command line arguments
program
    .option('-s, --subject [string]', 'Test case executed')
    .parse(process.argv);

subject = program.subject;

if (subject == "" || subject == undefined || subject == "undefined") {
    subject = "real browser";
}

Date.prototype.getFullDate = function() {
    var yyyy = this.getFullYear(),
        mm = (this.getMonth()+1) + "",
        dd = this.getDate() + "",
        h = this.getHours(),
        m = this.getMinutes(),
        getS = function (n) {
            return (/^\d\d$/.test(n) ? n : "0" + n);
        }
    
    date = getS(dd) + "-" + getS(mm) + "-" + yyyy;
    return date + " " + new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
};

date = new Date().getFullDate();


// create reusable transport method (opens pool of SMTP connections)
smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: MAIL_ID,
        pass: MAIL_PASS
    }
});

// setup e-mail data with unicode symbols
mailOptions = {
    from: "FusionCharts XT Testing <fusioncharts.tester@gmail.com>",
    to: TO, // list of receivers
    subject: "[TESTING] (xt-edge) Result for the " + subject + "  : " + date, // Subject line
    _text: "FusionCharts test result", // plaintext body
    html: html
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    smtpTransport.close(); // shut down the connection pool, no more messages
});