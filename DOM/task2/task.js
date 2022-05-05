

var newdiv = document.createElement("div") ;

newdiv.innerHTML = '<img src ="hi.jpg" alt="hello" />' ;
document.body.appendChild(newdiv)

var attr = document.createAttribute("class") ;

// attr.value = "divstyle" ;

// newdiv.setAttributeNodeNS(attr)

newdiv.setAttribute("class","divstyle")