

'use strict'

let b = document.querySelector("button")
console.log(b)

b.addEventListener("click", function() {
    if (b.innerHTML == "Hallo!") {
        b.innerHTML = "Tot ziens! (external js script"
    } else {b.innerHTML = "Hallo!"}
}

)