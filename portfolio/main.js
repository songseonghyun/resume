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








