(function (){

    var pElement = document.getElementById("gaya");
    alert(pElement);

    var pElement2=document.querySelector("p");
    alert(pElement2.parentNode.tagName);

    var pElement3=document.querySelectorAll("div p");
    alert(pElement3.length);

    var pElement4=document.querySelector("#gaya");
    alert(pElement4);

}());
