console.log('Loaded!');

var element = document.getElementById('text');
element.innerHTML = 'hi this is gowtham_krvz and iam your web app';

var img = document.getElementById('steve');
var marginLeft = 0;
    function moveRight() {
    marginLeft = marginLeft + 10;   
    img.style.marginLeft = marginLeft + 'px';
    }
    
    img.onclick = function() {
    var interval = setInterval(moveRight, 100);
    };

