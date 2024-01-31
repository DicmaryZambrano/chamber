const oLastModif = new Date(document.lastModified);
const d = new Date();

let year = d.getFullYear();

document.querySelector("#year").innerHTML = year;
document.querySelector("#lastModified").innerHTML = `Last Modified: ${oLastModif}`;