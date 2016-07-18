/*var person= new Object();

person.firstName="Gaya";
person.lastName="prashad";
person.getFullName=function(){
    return(person.firstName+" "+person.lastName);
}*/

var person={
    firstName:"gaya",
    lastName:" prashad",
    getFullName: function(){
        return this.firstName+" "+this.lastName;
    }
};
alert(person.getFullName());
