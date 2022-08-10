var nav = document.getElementById('navbar')
var body = document.getElementsByTagName('body')

window.addEventListener("resize", () => {
    nav.style.display = "none"
})

function hideshow() {
    if(nav.style.display == "none") {
        nav.style.display = "flex"
    } else {
        nav.style.display = "none"
    }
}

