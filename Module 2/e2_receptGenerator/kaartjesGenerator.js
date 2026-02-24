const button = document.getElementById('generateCard')
console.log(button)
let result = document.getElementById('result')


button.addEventListener("click", function() {
    let recipeName = document.getElementById('recipeName').value
    let prepTime = document.getElementById('prepTime').value
    let ingredients = document.getElementById('ingredients').value
    ingredients = ingredients.split("\n")
    let ingredientsList = ""
    for (let ingredient of ingredients) {
        ingredientsList += `- ${ingredient}<br>`
    }
    let newRecept = 
        `<br>
        ${recipeName} 
        <br>
        Bereidingstijd: ${prepTime}min 
        <br><br>
        Ingredienten: <br>
        ${ingredientsList} 
        <br><br>`
    let receptKaart = document.createElement('div')
    receptKaart.innerHTML = newRecept
    result.appendChild(receptKaart)
})