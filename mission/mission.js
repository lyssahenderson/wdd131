function setTheme() {
    const themeValue = document.querySelector("select").value;
    console.log("Theme" + themeValue);
    
    if (themeValue === "Dark"){
        document.body.classList.add("dark");
        document.querySelector("img").setAttribute("src", "./images/byui-logo_white.png");
    }
    else {
        document.body.classList.remove("dark");
        document.querySelector("img").setAttribute("src", "./images/logo.webp");
    }
}
document.querySelector("select").addEventListener("change", setTheme);