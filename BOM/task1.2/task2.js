

var win = window.open("task2test.html" ,"", "_blank", "width =50 , height = 50")



win.focus ; 

var x = "typing message" ;
var i = 0 ;
setInterval(function name() {

    document.write(x.charAt(i))
    i++ ;
},1000) ;


setTimeout(function () {
    win.close();
},15000)

