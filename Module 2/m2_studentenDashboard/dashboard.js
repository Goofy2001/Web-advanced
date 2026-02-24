


let voegToeButton = document.getElementById('addGrade')
let students = {}

voegToeButton.addEventListener('click', function() {
    let student = document.getElementById('student').value
    if (!students[student]) {
    students[student] = {}
    }
    let vak = document.getElementById('course').value
    let score = parseFloat(document.getElementById('grade').value)
    students[student][vak] = score
    for (let student in students) {
        console.log(`--${student}--`)
        let som = 0
        let hoogsteScore = 0
        let laagsteScore = 20
        let index = 0
        for (vak of students[student]) {
            console.log(`${vak} / ${score}`)
            if (hoogsteScore < students[student][score]) {hoogsteScore = students[student][score]}
            if (laagsteScore > students[student][score]) {laagsteScore = students[student][score]}
            som += students[student][score]
            index += 1
        }
        console.log(`${hoogsteScore} --- ${laagsteScore} --- ${som/index}`)
    }
})

// nog niet klaar