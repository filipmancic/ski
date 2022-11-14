$(window).on('load',function() {
  $('#loading').hide();
});
var bg= document.getElementById("b1");
function f1(){
  bg.style.backgroundImage='url("img/bg0.jpg")';
}
function f2(){
  bg.style.backgroundImage='url("img/bg1.jpg")';
}
function f3(){
  bg.style.backgroundImage='url("img/bg2.jpg")';
}
function f4(){
  bg.style.backgroundImage='url("img/bg3.jpg")';
}
function f5(){
  bg.style.backgroundImage='url("img/bg4.jpg")';
}

var btnContainer = document.getElementById("circles");
var btns = btnContainer.getElementsByClassName("far");

window.onscroll = function() {scrollFunction()};
var x = document.getElementsByClassName("nav-item");
var y = document.getElementsByClassName("nav-dugme");
var full = document.getElementById("fullnav");
var i;

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      for (i = 0; i < x.length; i++) {
        x[i].style.padding = "10px 20px";
        y[i].style.color = "#0079c7";
      }
      full.style.background = "rgba(255,255,255,0.9)";
    } else {
      for (i = 0; i < x.length; i++) {
        x[i].style.padding = "50px 20px";
        y[i].style.color = "white";
      }
      full.style.background = "rgba(255,255,255,0)";
    }
}

var n;
for (n = 0; n < btns.length; n++) {
  btns[n].addEventListener("click", function() {
    var current = document.getElementsByClassName("fw900");
    current[0].className = current[0].className.replace(" fw900", "");
    this.className += " fw900";
  });
}

$(window).scroll(function(){
  var scroll=$(window).scrollTop();
  $('.m1').css({
    width: (80 + scroll/80) + "%"
  })
  $('.m2').css({
   width: (80 + scroll/60) + "%",
   left: (scroll/150)-5 + "%"
  })
  $('.text').css({
    top: "calc(" + -scroll/100 + "vw + 150px)"
  })
})
