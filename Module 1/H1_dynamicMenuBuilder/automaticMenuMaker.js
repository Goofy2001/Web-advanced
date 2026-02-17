let hoofdtitels = document.querySelectorAll("h1")

for (let i = 0; i < hoofdtitels.length; i++) {
    hoofdtitels[i].id = "Hoofdstuk_" + (i+1)
    let nextTitel = hoofdtitels[i].nextElementSibling
    for (let j = 1; nextTitel != null && nextTitel.tagName == "H2"; j++) {
        nextTitel.classList.add("Hoofdstuk_" + (i+1) + "." + j)
        nextTitel = nextTitel.nextElementSibling
    }
}

let deeltitels = document.querySelectorAll("h2")
console.log(deeltitels)

