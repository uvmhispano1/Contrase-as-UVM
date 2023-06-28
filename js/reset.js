const fs = require('fs');

document.getElementById('accept').addEventListener('click', () =>{
    var text = document.getElementById('text');
    var buttons = document.getElementById('buttons');
    fs.rm('C:/UVMC', { recursive: true, force: true }, (err) =>{});
    text.style.animation = 'fadeout 1s forward';
    buttons.style.animation ='fadeout 1s forward';
    setTimeout(() =>{
        buttons.style.display = 'none';
        text.innerHTML = '<h2>Datos eliminados. Se reiniciará la aplicación.</h2>';
        text.style.animation ='fadein 1s' ;
    }, 2000);
    setTimeout(() =>{
        text.style.animation = 'fadeout 1s forward';
    }, 5000);
    setTimeout(() => window.location.href = 'index.html', 10000);
});

document.getElementById('cancel').addEventListener('click', () =>
    window.location.href = 'settings.html');