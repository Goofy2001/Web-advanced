let divsKader = document.querySelectorAll("#grid>div")
console.log(divsKader)

let redCount = document.getElementById("redCount")
let blueCount = document.getElementById("blueCount")
let greenCount = document.getElementById("greenCount")

divsKader.forEach(function(div) {
    
    div.addEventListener("pointerover", function() {
        div.style.color = "white"
        div.style.backgroundColor = "red"
        div.className = "red"
        redCount.innerHTML = document.getElementsByClassName("red").length
        blueCount.innerHTML = document.getElementsByClassName("blue").length
        greenCount.innerHTML = document.getElementsByClassName("green").length
    })
    div.addEventListener("click", function() {
        if (div.style.backgroundColor == "blue") {
            div.style.backgroundColor = "green"
            div.className = "green"
            redCount.innerHTML = document.getElementsByClassName("red").length
            blueCount.innerHTML = document.getElementsByClassName("blue").length
            greenCount.innerHTML = document.getElementsByClassName("green").length
        } else if (div.style.backgroundColor == "green") {
        } else {
            div.style.backgroundColor = "blue"
            div.className = "blue"
            redCount.innerHTML = document.getElementsByClassName("red").length
            blueCount.innerHTML = document.getElementsByClassName("blue").length
            greenCount.innerHTML = document.getElementsByClassName("green").length
        }
    })
})


