window.onclick = function() {
    window.location.href = 'main.html';
};


const loading = document.getElementById('loading')
const sign = document.getElementById('sign');

var time = 0;
let x = 0;

time = setInterval(function() {
    if (x == 3) {
        x = 0
        sign.children[0].style.opacity = '0';
        sign.children[1].style.opacity = '0';
        sign.children[2].style.opacity = '0';
    }
    sign.children[x].style.opacity='1';
    x++;
},400);

var time1 = 1;
let y = 0
let size = 200;
let marginB = 30

time1 = setInterval(function() {
    if (y == 3) {
        y = 0;
        size = 200;
        marginB = 30;
        // bgX = 200;
        // bgY = 300;
        // size = 0
        loading.style.marginBottom = '30px'
        loading.style.width = '200px';
        loading.style.height = '200px';
    }
    loading.style.width = size + 'px';
    loading.style.height = size + 'px';
    loading.style.marginBottom = marginB + 'px';
    marginB -= 20;
    size += 20;
    y++;
},600);

time2 = 2;

time2 = setTimeout(function() {
    window.location.href = './portfolio/main.html';
},10000);
