let addButton = document.getElementById('addToCart')
let unorderedList = document.getElementById('cartItems')
let productArray = []
let total = document.getElementById('total')

function visualiseerLijst(array) {
    unorderedList.innerHTML = ""
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        let listItem = document.createElement('li')
        listItem.textContent = `${item.naam} - €${item.prijs} `
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener("click", function () {deleteItem(i)})
        listItem.appendChild(deleteBtn)
        unorderedList.appendChild(listItem)
        sum += parseFloat(item.prijs)
    }
    total.innerHTML = sum.toFixed(2)
}


    

addButton.addEventListener("click", function() {
    let productName = document.getElementById('productName').value
    console.log
    let productPrice = parseFloat(document.getElementById('productPrice').value)
    productArray.push({naam: productName, prijs: parseFloat(productPrice)})
    visualiseerLijst(productArray)
})

let sortButton = document.getElementById('sortByPrice')

sortButton.addEventListener("click", function() {
    productArray.sort(function(a,b) {
        return Number(a.prijs) - Number(b.prijs)})
    visualiseerLijst(productArray)
})

function deleteItem(index) {
    productArray.splice(index, 1)
    visualiseerLijst(productArray)
}



