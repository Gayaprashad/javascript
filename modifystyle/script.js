(function (){
    var divFoo=document.getElementById("foo");
            style=divFoo.style;
/* old method
    divFoo.className = " css-class css-class2 ";
    divFoo.className= divFoo.className.replace(" css-class2 " , "");*/

    /* new method not supported in IE <10
    divFoo.classList.add("css-class");
    divFoo.classList.remove("css-class");
    divFoo.classList.toggle("css-class");*/

    var getStyle=function(e1,cssprop){
        if(typeOf getComputedStyle!=="undefined")
         return window.getComputedStyle(e1,null).getPropertyValue(cssprop);
         else {
                return e1.currentStyle(cssprop);
         }
    }

}());
