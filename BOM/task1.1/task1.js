
var win ;

setTimeout(function () {
    
  win = window.open("http://www.google.com" ,"", "_blank", "width =20 , height = 20")

},2000)


var count ;

var timer = setInterval(function () {
    
    win.moveBy(count,count);


    count+= 10 ;

},3000) ;


function stop() {
    clearInterval(timer) ;
}