const el = document.getElementsByTagName('h1')[0];
console.log(el)
var y = document.createTextNode("from acc");

let timeout =500
setTimeout(() => {
    el.appendChild(y);

}, timeout);