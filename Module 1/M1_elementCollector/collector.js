let specials = document.querySelectorAll(".special")
console.log(specials)

for (let i = 0; i < specials.length; i++) {
    specials[i].style.color = "red"
}

let tweedeParagraaf = document.querySelector("p:nth-child(2)")
console.log(tweedeParagraaf)

tweedeParagraaf.style.textDecoration = "underline"

let output = document.getElementById("output")
console.log(output)

window.addEventListener("load", function() {
    output.innerHTML = parseFloat(specials.length)
})