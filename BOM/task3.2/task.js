var imags = ["imgs/1.jpg" , "imgs/2.jpg" , "imgs/3.jpg"];
var index = 0;
var img = document.getElementById("myImg");
// var btnNext = document.getElementById("next");
// var btnPrev = document.getElementById("prev");
function next(){
  index++;
  img.setAttribute("src", `${imags[index]}`);
        }

 function prev(){
  index--;

  img.setAttribute("src", `${imags[index]}`);
}

var timer ;
 function slideShow(){

 timer = setInterval(show, 2000);
}
function show() {
  index++
  if (index > imags.length - 1) {
    index = 0;
          }
  img.setAttribute("src", `${imags[index]}`);
    }
   

function stop(){
 clearInterval(timer) ;
}

