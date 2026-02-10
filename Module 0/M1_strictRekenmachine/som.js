'use strict'

let button = document.querySelector("button")

let resultaat = document.getElementById('resultaat')


button.addEventListener('click', function() {
    let getal1 = parseFloat(document.getElementById('getal1').value)
    let getal2 = parseFloat(document.getElementById('getal2').value)
    let som
    if (isNaN(getal1) || isNaN(getal2)) {som = "Er is een fout"}
    else {som = getal1 + getal2}
    resultaat.innerHTML = som})
    