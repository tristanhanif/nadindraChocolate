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