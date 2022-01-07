let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



const introduce = document.getElementsByClassName('IntroducePage');
const leftbtn = document.getElementById('leftbtn');
const rightbtn = document.getElementById('rightbtn');
const show = document.getElementsByClassName('show')
let place = 0;

leftbtn.onclick = function() {
  place += 500;
  if (place > 0) {
    // console.log('check');
    place = -1500;
    for(let j=0; j<introduce.length; j++) {
      introduce[j].style.transform = 'translateY(0px);'
    }
  }
  for (let i=0; i<introduce.length; i++) {
    introduce[i].style.transform = 'translateY('+place+'px)';
  }
};



rightbtn.onclick = function() {
  place -= 500;
  if (place <= -2000) {
    // console.log('check');
    place = 000;
    for(let j=0; j<introduce.length; j++) {
      introduce[j].style.transform = 'translateY(0px);'
    }
  }
  for (let i=0; i<introduce.length; i++) {
    introduce[i].style.transform = 'translateY('+place+'px)';
  }
};
