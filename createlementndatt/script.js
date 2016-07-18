(function (){
    var dom=document;
    var ele=dom.createElement("p");
    var f3=dom.createElement("p");
    c1=dom.createTextNode("this is gaya da");
    f3.innerHTML="<strong>this is dynamically created</strong>";
    ele.appendChild(c1);
    f3.id="bar";
    foo.parentNode.replaceChild(f3,foo);
    ele.align="center";
    dom.body.appendChild(ele);
}());
