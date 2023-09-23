const today = new Date();
let year = today.getFullYear();
let copyright = document.querySelector("#copyright");

if (copyright) {
  copyright.innerHTML = `&copy ${year.toString()} | `;
}

const last = document.lastModified;
let lastModified = document.querySelector("#lastMod");
lastModified.innerHTML = `Last modified: ${last.toString()}`;
// document.getElementById("lastMod").innerHTML = last;
