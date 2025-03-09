const form = document.getElementById('registrationForm')

const nameInput = document.getElementById('login')
const emailInput = document.getElementById('email')
const ageInput = document.getElementById('age')
const professionSelect = document.getElementById('profession')
const passwordInput = document.getElementById('password')
const termsCheckbox = document.getElementById('terms')
const submitBtn = document.getElementById('submitBtn')

const genderMale = document.getElementById('male')
const genderFemale = document.getElementById('female')

const nameError = document.getElementById('loginError')
const emailError = document.getElementById('emailError')
const ageError = document.getElementById('ageError')
const professionError = document.getElementById('professionError')
const passwordError = document.getElementById('passwordError')
const termsError = document.getElementById('termsError')

submitBtn.disabled = false

let nameTouched = false
let emailTouched = false
let ageTouched = false
let professionTouched = false
let passwordTouched = false
let termsTouched = false

function validateForm() {
    let isValid = true

    // Валидация имени
    const namePattern =
        /^(?!\s)[a-zA-Zа-яА-ЯёЁ](?:[a-zA-Zа-яА-ЯёЁ\s]{0,18}[a-zA-Zа-яА-ЯёЁ])?$/
    if (nameTouched && nameInput.value.trim() === '') {
        nameError.style.display = 'block'
        nameError.textContent = 'Заполните поле'
        isValid = false
    } else if (nameTouched && !namePattern.test(nameInput.value.trim())) {
        nameError.style.display = 'block'
        nameError.textContent =
            'Имя должно содержать только буквы и пробелы (2-20 символов)'
        isValid = false
    } else {
        nameError.style.display = 'none'
    }

    // Валидация email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (emailTouched && emailInput.value.trim() === '') {
        emailError.style.display = 'block'
        emailError.textContent = 'Заполните поле'
        isValid = false
    } else if (emailTouched && !emailPattern.test(emailInput.value.trim())) {
        emailError.style.display = 'block'
        emailError.textContent = 'Добавьте существующий email'
        isValid = false
    } else {
        emailError.style.display = 'none'
    }

    // Валидация возраста
    if (ageTouched && ageInput.value.trim() === '') {
        ageError.style.display = 'block'
        ageError.textContent = 'Заполните поле'
        isValid = false
    } else {
        ageError.style.display = 'none'
    }

    // Валидация профессии
    if (professionTouched && professionSelect.value === 'Выберите профессию') {
        professionError.style.display = 'block'
        professionError.textContent = 'Выберите профессию'
        isValid = false
    } else {
        professionError.style.display = 'none'
    }

    // Валидация пароля
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    if (passwordTouched && passwordInput.value.trim() === '') {
        passwordError.style.display = 'block'
        passwordError.textContent = 'Заполните поле'
        isValid = false
    } else if (passwordTouched && !passwordPattern.test(passwordInput.value)) {
        passwordError.style.display = 'block'
        passwordError.textContent =
            'Пароль должен быть не менее 8 символов и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру'
        isValid = false
    } else {
        passwordError.style.display = 'none'
    }

    // Валидация чекбокса согласия
    if (termsTouched && !termsCheckbox.checked) {
        termsError.style.display = 'block'
        termsError.textContent = 'Необходимо ваше согласие'
        isValid = false
    } else {
        termsError.style.display = 'none'
    }

    submitBtn.disabled = !isValid
    return isValid // Возвращаем значение isValid
}

// Добавляем события для валидации на ввод данных
nameInput.addEventListener('focusout', function () {
    nameTouched = true
    validateForm()
})
emailInput.addEventListener('focusout', function () {
    emailTouched = true
    validateForm()
})
ageInput.addEventListener('focusout', function () {
    ageTouched = true
    validateForm()
})
professionSelect.addEventListener('change', function () {
    professionTouched = true
    validateForm()
})
passwordInput.addEventListener('focusout', function () {
    passwordTouched = true
    validateForm()
})
termsCheckbox.addEventListener('change', function () {
    termsTouched = true
    validateForm()
})

form.addEventListener('submit', (event) => {
    event.preventDefault()

    nameTouched = true
    emailTouched = true
    ageTouched = true
    professionTouched = true
    passwordTouched = true
    termsTouched = true

    validateForm() // Вызываем валидацию перед отправкой

    if (validateForm()) {
        alert('Форма успешно отправлена!')

        // Выводим в консоль значения
        console.log('логин ' + nameInput.value)
        console.log('почта ' + emailInput.value)
        console.log('возраст ' + ageInput.value)
        if (genderMale.checked) {
            console.log('пол мужской')
        } else if (genderFemale.checked) {
            console.log('пол женский')
        } else {
            console.log('пол не выбран')
        }
        console.log('профессия ' + professionSelect.value)
        console.log('пароль ' + passwordInput.value)

        // Чистим поля

        /*nameInput.value = ''
        emailInput.value = ''
        ageInput.value = ''
        genderMale.checked = false
        genderFemale.checked = false
        professionSelect.value = professionSelect.options[0].value
        passwordInput.value = ''
        termsCheckbox.checked = false*/

        form.reset()
    }
})
