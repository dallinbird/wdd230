const d = new Date();
const last = document.lastModified;
let day = d.getFullYear();
document.getElementById("year").innerHTML = day;
document.getElementById("lastMod").innerHTML = last;
