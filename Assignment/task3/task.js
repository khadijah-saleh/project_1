
// var arr = document.getElementsByClassName('star')



// console.log(arr)
// arr[0].style.color = "yellow"

var arr2 = document.querySelectorAll(".star");


///////////////////////  on mouse over /////////////////////////


for (let i = 0; i < arr2.length; i++)
    arr2[i].addEventListener("mouseover", show);

function show(evt) {
    for (let i = 0; i < arr2.length; i++)
        if (arr2[i] == evt.target)
            for (var j = 0; j <= i; j++) {
                arr2[j].style.color = "yellow"
            }
}


///////////////////////  on mouse out /////////////////////////


for (let i = 0; i < arr2.length; i++)
    arr2[i].addEventListener("mouseout", show2);

function show2(evt) {
    for (let i = 0; i < arr2.length; i++)
        if (arr2[i] == evt.target)
            for (var j = 0; j <= i; j++) {
                arr2[j].style.color = "black"
            }
}



//////////////// on click /////////////////////////////////

var count = 2;

for (let i = 0; i < arr2.length; i++)

    arr2[i].addEventListener("click", show3);

if (count % 2 == 0) {
    function show3(evt) {


        for (let i = 0; i < arr2.length; i++) {

            if (arr2[i] == evt.target) {
                for (var j = 0; j <= i; j++) {
                    arr2[j].style.color = "yellow"
                }

                arr2[i].removeEventListener("mouseout", show2);

                arr2[i].removeEventListener("mouseover", show);

            }
        }

    }
    count++
}

else if (count % 2 == 1) {


    function show3(evt) {

        for (let i = 0; i < arr2.length; i++) {

            if (arr2[i] == evt.target) {

                arr2[i].addEventListener("mouseout", show2);

                arr2[i].addEventListener("mouseover", show);

            }
        }
    }

    count++
}


