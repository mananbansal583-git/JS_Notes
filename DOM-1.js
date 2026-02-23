//Window Object -> The window object represents an open window in a browser. It is browser's object (not JavaScript's) & is automatically created by browser.It is a global object with lots of properties & methods.

//DOM -> When a web page is loaded , the browser creates a Document Object Model (DOM) of the page

/*
Selecting with ID -> document.getElementById("myId")
Selecting with class -> document.getElementsByClassName("myClass")
Selecting with tag -> document.getElementsByTagName("p")

query selector
document.queryselector("myId / myClass / tag")   //returns first element
document.queryselectorAll("myId / myClass / tag")  //returns a NodeList

diff between innerText and innerHTML
innerText -> returns pure text
innerHTMl -> returns text but with html tags

tagName -> returns tag for element nodes
textContent -> returns textual content even for hidden elements
*/

let h2 = document.querySelector("h2");
console.dir(h2.innerText)
h2.innerText=h2.innerText+" from Manan Bansal"
console.dir(h2.innerText)

let divs = document.querySelectorAll(".box");
divs[0].innerText="Box";
divs[1].innerText="Dabba";
divs[2].innerText="trunk";
//ORRRR
let idx=1;
for (let div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}