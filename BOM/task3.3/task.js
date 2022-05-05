

var i = 0;

var timer ;
function leaveFun() {


   timer = setInterval(function () {

        if(i >= document.images.length)
        i = 0 ;

        for (var j = 0; j < document.images.length; j++) {
          
            if(j == i)
            document.images[j].src = "marbels/marble3.jpg" ;

            else
            document.images[j].src = "marbels/marble1.jpg" ;

        }
       
        i++;

    }, 1000)

}

function moveFun()
{
  clearInterval(timer) ;
}