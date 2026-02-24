let button = document.getElementById("addScore")
console.log(button)
let array = []
let sortedArray = []
let gemiddeldeScore = document.getElementById("average")
let hoogsteScore = document.getElementById("highest")
let unorderedList = document.getElementById("scoreList")

button.addEventListener("click", function() {
    let score = parseFloat(document.getElementById("score").value)
    array.push(score)
    sortedArray = array.sort(function(a,b) {a-b})
    console.log(sortedArray)
    let highestValue = sortedArray[array.length - 1]
    hoogsteScore.innerHTML = highestValue
    let sum = 0
    let i
    for (i = 0; i < array.length; i++) {sum += array[i]}
    gemiddeldeScore.innerHTML = sum / i
    let newText = document.createTextNode(score)
    let newElement = document.createElement('li')
    newElement.appendChild(newText)
    unorderedList.appendChild(newElement)
})
