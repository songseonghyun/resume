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



let projectname = ['web', 'java', 'oracle', 'python'];

// for (let i=1; i<projectname.length+1; i++) {
//   $('#Project .text-box:nth-child('+ i + ')').click(function() {
//     $('#'+projectname[i-1]+'project').css('opacity', 1).css('z-index', 1000);
//     return false;
//   });

//   $('#'+ projectname[i-1] +'project').click(function() {
//     $(this).css('opacity', 0).css('z-index', -1000);
//   });
  
//   $('#'+ projectname[i-1] +'project .projcontainer').click(function() {
//     // $(this).css('border-radius', '50%')
//     return false;
//   });
// }
  
for (let i=1; i<projectname.length; i++) {

  $('#Project .text-box:nth-child(' + i + ')').click(function() {
    // location.href='./'+projectname[i-1]+'/'+projectname[i-1]+'projectbig.html'
    window.open('https://github.com/songseonghyun/'+ projectname[i-1] +'Project');
  });

}

$('#Project .text-box:nth-child(4)').click(function() {
  // location.href='./'+projectname[i-1]+'/'+projectname[i-1]+'projectbig.html'
  window.open('https://songseonghyun.github.io/StevenSeongHyun.github.io/');
});












// const introduce = document.getElementsByClassName('IntroducePage');
// const leftbtn = document.getElementById('leftbtn');
// const rightbtn = document.getElementById('rightbtn');
// const show = document.getElementsByClassName('show')
// let place = 0;


// leftbtn.onclick = function() {
//   place += 500;
//   if (place > 0) {
//     // console.log('check');
//     place = -1500;
//     for(let j=0; j<introduce.length; j++) {
//       introduce[j].style.transform = 'translateY(0px);'
//     }
//   }
//   for (let i=0; i<introduce.length; i++) {
//     introduce[i].style.transform = 'translateY('+place+'px)';
//   }
// };



// rightbtn.onclick = function() {
//   place -= 500;
//   if (place <= -2000) {
//     // console.log('check');
//     place = 000;
//     for(let j=0; j<introduce.length; j++) {
//       introduce[j].style.transform = 'translateY(0px);'
//     }
//   }
//   for (let i=0; i<introduce.length; i++) {
//     introduce[i].style.transform = 'translateY('+place+'px)';
//   }
// };



// const project = document.getElementsByClassName("project");
