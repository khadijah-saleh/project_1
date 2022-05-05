
function EnterEqual() {
    var exp = document.getElementById("Answer").value
    if (exp) {
        document.getElementById("Answer").value = eval(exp)
    }

   EnterClear() ;

}

function EnterNumber(num) {


  document.getElementById("Answer").value = document.getElementById("Answer").value + num;

}

function EnterOperator(oper) {

    document.getElementById("Answer").value = document.getElementById("Answer").value + oper;

}

function EnterClear() {
    document.getElementById("Answer").value = "";
}

