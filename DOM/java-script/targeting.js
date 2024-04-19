//basic methods
var element;
element=document.all;
console.log(element);
element=document.all[9];
console.log(element);
element=document.head;
console.log(element);
element=document.title;
console.log(element);
element=document.body;
console.log(element);
element=document.links;
element=document.links[0];
console.log(element);
element=document.images;
console.log(element);
//element=document.forms;
element=document.doctype;
console.log(element);
element=document.URL;
console.log(element);
element=document.domain;
console.log(element);
element=document.baseURI; //return complete url 
console.log(element);
//dom methods
element=document.getElementById("header");
console.log(element);
element=document.getElementsByClassName("list");
console.log(element);
element=document.getElementsByTagName("ul")
console.log(element);