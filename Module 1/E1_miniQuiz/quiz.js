// voorbeeld start code
let naam = prompt("Wat is je naam?")

let vragen = ["Is [] == ![]", "typeof null is", "[] + {}"]

let antwoorden = ["true", "object", "[object object]"]

if (vragen.length == antwoorden.length) {
    let score = 0
    for (let i = 0; i < vragen.length; i++) {
        let antwoordGebruiker = prompt(vragen[i])
        if (antwoordGebruiker == antwoorden[i]) {
            alert("Goed gedaan")
            score += 1
        } else {
            alert("Het antwoord was:" + antwoorden[i])
        }
    }
    alert("Je score is: " + score + " / " + antwoorden.length)
}



