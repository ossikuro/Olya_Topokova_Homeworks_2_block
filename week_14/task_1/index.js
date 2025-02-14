const grades = []
for (let i = 0; i < 12; i++) {
    grades.push(Math.floor(Math.random() * 100 + 1))
}
console.log(grades)

// средний балл
let sum = 0
grades.forEach((grade) => {
    sum += grade
})
const average = sum / grades.length

//макс и мин баллы
const maxGrade = Math.max(...grades)
const minGrade = Math.min(...grades)

// двоешники, троешники
const positiveGrades = grades.filter((grade) => grade >= 60).length
const negativeGrades = grades.filter((grade) => grade < 60).length

//разметка
const letterGrades = grades.map((grade) => {
    if (grade >= 80) return 'A'
    if (grade >= 60) return 'B'
    if (grade >= 40) return 'C'
    if (grade >= 20) return 'D'
    return 'E'
})

// Вывод результатов
console.log('Оценки студентов:', grades)
console.log('Средний балл:', average.toFixed(2))
console.log('Максимальная оценка:', maxGrade)
console.log('Минимальная оценка:', minGrade)
console.log('Количество положительных оценок:', positiveGrades)
console.log('Количество отрицательных оценок:', negativeGrades)
console.log('Буквенные оценки:', letterGrades)
