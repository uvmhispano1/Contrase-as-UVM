const info = require('C:/UVMC/info.json');
const nodemailer = require('nodemailer');

var twoFA = "";
const email = info.user;

window.addEventListener('DOMContentLoaded', () =>{
    var verify = document.getElementById('verify');
    verify.classList.remove('hidden');
    verify.style.animation = 'fadein 0.5s';
    sendMail();
});

document.getElementById('submitv').addEventListener('click', () =>{
    var code = document.getElementById('code').value;
    var verify = document.getElementById('verify');

    if (code === twoFA){
        verify.style.animation = 'fadeout 1s forwards';
        setTimeout(() => window.location.href = 'mainmenu.html', 5000);
    }else{
        var err = document.getElementById('error');
        err.classList.remove('hidden');
        err.innerHTML = "¡Codigo incorrecto! Inténtalo de nuevo.";
    }
});

async function sendMail(){
    for (let i = 1; i <= 6; i++){
        twoFA += (Math.floor(Math.random() * 9)).toString();
    }

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "USER",
          pass: "PASS",
        },
    });

    await transporter.sendMail({
        from: "USER",
        to: email,
        subject: "Código de verificación 2FA",
        text: `Tu código es: ${twoFA}`
    });
}