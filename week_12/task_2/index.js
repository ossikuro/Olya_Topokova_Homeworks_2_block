const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщыэюя'

let randomWord = ''

function randomize() {
    const index = Math.floor(Math.random() * alphabet.length)
    return index
}

// цикл: начало; условие; шаг
for (let i = 0; i < 4; i++) {
    const randomLetter = randomize()
    randomWord += alphabet[randomLetter]
}

console.log(randomWord)

// ---------- вариант 2 в тупую -----------
randomWord2 = () => {
    const LetterIndex1 = alphabet[Math.floor(Math.random() * alphabet.length)]
    const LetterIndex2 = alphabet[Math.floor(Math.random() * alphabet.length)]
    const LetterIndex3 = alphabet[Math.floor(Math.random() * alphabet.length)]
    const LetterIndex4 = alphabet[Math.floor(Math.random() * alphabet.length)]

    return LetterIndex1 + LetterIndex2 + LetterIndex3 + LetterIndex4
}

console.log(randomWord)
