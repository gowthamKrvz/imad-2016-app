console.log('Loaded!');

var element = document.getElementById('text');
element.innerHTML = 'hi this is gowtham_krvz and iam your web app';

var element = document.getElementById('steve');
    function moveRight() {
    marginLeft = marginLeft + 10;   
    element.style.marginLeft = marginLeft + 'px';
    }
    
    element.onclick = function() {
    var interval = setInterval(moveRight, 100);
    };

