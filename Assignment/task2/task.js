

var newimg = document.createElement("img")
newimg.setAttribute("src","./imgs/1.jpg")

var newp = document.createElement("p")
newp.innerText = "hello"

var newdiv = document.createElement("div")

document.newdiv.appendChild(newimg)
document.newdiv.appendChild(newp)
document.body.appendChild(newdiv)

alert(newdiv.childNodes.length)

// newdiv.removeChild(newimg)
document.createElement()