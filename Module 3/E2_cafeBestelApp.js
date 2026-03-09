const maakBestelling = (drank = "Cola", snack = "Chips") => {
    return {
        drank,snack, timestamp: new Date().toLocaleDateString()}
    }

console.log(maakBestelling())
console.log(maakBestelling("Fanta"))
console.log(maakBestelling("Sprite", "nootjes"))