const fs = require('fs');

window.addEventListener('DOMContentLoaded', () => {
    var div = document.getElementById('starting');
    var container = document.getElementById('container');
    if(!fs.existsSync("C:/UVMC/")){
        setTimeout(() => div.innerHTML += "<br>Preparándose para iniciar por primera vez...", 5000);
        setTimeout(() => window.location.href = 'firstrun.html', 15000);
    }
    else{
        setTimeout(() => div.innerHTML += '<img src="res/spinner2.gif" class="img-loading">', 3000);
        setTimeout(() => container.style.animation = 'fadeout 1s forwards', 9000);
        setTimeout(() => window.location.href = 'login.html', 10000);
    }
});