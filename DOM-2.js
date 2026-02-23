let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.setAttribute("class","myClass"));  //yahan class naam nhi hai hamne class ko change karna tha esliye class

//for accessing style in js file
let div2 = document.querySelector("div");
console.log(div2.style)  //this only shows the inline style not linked file one
div2.style.backgroundColor="purple";
div2.style.fontSize="24px";
// equal to ayega tune pehle () yeh laga diya tha to error ayega

/*DOM manipulation
Insert the element

let el=document.createElement("div")
node.append(el)  //adds at the end of the node(inside)
node.prepend(el) //adds at the start of the node(inside)
node.before(el)  //adds before the node(outside)
node.after(el)   //adds after the node(outside)

Delete the element
node.remove()  //remove the node
*/


let newBtn=document.createElement("button");
newBtn.innerText="Click me !"
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
document.querySelector("body").prepend(newBtn)


//classList.add()  -> it adds the one more class in the existing tag without removing the old one but if we use setAttribute then it overrides the old one and add the new class and remove the old one

