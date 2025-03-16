var xstatus = true;
var nb = false;

const tombol = document.getElementById('tombol');
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');

tombol.addEventListener('click', () => {
    if (xstatus) {
        navbar.classList.add("bg-yellow-700");
        menu.classList.remove("hidden");
        menu.classList.add("flex");
        xstatus = false;
    } else {
        if (nb == false || window.scrollY  < 51){
            navbar.classList.remove("bg-yellow-700");
        }
        menu.classList.remove("flex");
        menu.classList.add("hidden");
        xstatus = true;
    }
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg", "bg-yellow-700");
        nb = true;
    } else {
        if (xstatus != false) {
            navbar.classList.remove("shadow-lg", "bg-yellow-700");
            nb = false;
        }
    }
})

var mode = false;
function darkMode() {
    if (mode) {
        document.documentElement.classList.remove("dark");
        mode = false;
        localStorage.setItem("theme", "light"); 
    }
    else {
        document.documentElement.classList.add("dark");
        mode = true;
        localStorage.setItem("theme", "dark");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
        mode = true;
    }  else {
        document.documentElement.classList.remove("dark");
        mode = false;
    }
    
})