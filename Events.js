// /*
// The change in the state of an object is known as an Event

// Events are fired to notify code of "interesting changes" that may affect code execution.

// · Mouse events (click, double click etc.)
// · Keyboard events (keypress, keyup, keydown)
// · Form events (submit etc.)
// . Print event & many more
//  */
// let btn1=document.querySelector("#btn1")

// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
//     let a =25;
//     a++
//     console.log(a);
// }

// let div=document.querySelector("div");

// div.onmouseover=()=>{
//     console.log("You are inside div");
// }

// //Now if we have done events inline and event in js file then priority is given to js file
// //and if we define multiple handler in it then last one is executed

// /*
// Event Object
// It is a special object that has details about the event
// All event handlers have access to the event objects properties and methods

// node.event=(e)=>{
//     handle here
// }

// e.target , e.type , e.clientX , e.clientY
// */

// btn1.onclick =(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

// /*
// Event Listener
// node.addEventListener(event,callback);   //callback is a function or known to be handler
// node.removeEventListener(event,callback);

// NOTE -> the callback reference should be same to remove -> same here means not ki tum same function likh doge aur expect karoge ki tumhare vo event delete ho jayega , agar remove karna hai to us function ko kisi variable mein store karke dono jagah pass kardo

// Event listener ke through ham mutiple event trigger karva sakte hai
// */

let modeBtn=document.querySelector("#mode");
let currMode="light";
let body = document.querySelector("body")

modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode="light";
        body.classList.add("light");
        body.classList.add("dark");
    }
    console.log(currMode);
})