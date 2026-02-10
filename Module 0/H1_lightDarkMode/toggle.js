'use strict'

let button = document.querySelector("button")
console.log(button)
let body = document.querySelector("body")
console.log(body)
let link = document.querySelector("a")
console.log(link)

button.addEventListener("click", function() { 
    if (button.innerHTML == "Donker thema") {
        button.innerHTML = "Licht thema"
        button.style.backgroundColor = "#000"
        button.style.color = "#fff"
        button.style.border = "solid white 2px"
        body.style.backgroundColor = "#000"
        body.style.color = "#fff"
        link.style.color = "#fff"
    } else {
        button.innerHTML = "Donker thema"
        button.style.backgroundColor = "#fff"
        button.style.color = "#000"
        button.style.border = "solid black 2px"
        body.style.backgroundColor = "#fff"
        body.style.color = "#000"
        link.style.color = "#000"
    }
})