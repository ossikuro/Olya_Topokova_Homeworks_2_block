// Получаем элементы
const birthdayInput = document.getElementById('birthday')
const errorMessage = document.getElementById('error')
const resultDiv = document.getElementById('result')
const calculateButton = document.getElementById('calculateButton')

// Функция для вычисления количества дней до дня рождения
function calculateDays() {
    if (birthdayInput.value === '') {
        errorMessage.style.display = 'block'
        birthdayInput.classList.add('error-input')
        resultDiv.textContent = ''
        return
    }

    errorMessage.style.display = 'none'
    birthdayInput.classList.remove('error-input')

    const today = new Date()
    const birthday = new Date(birthdayInput.value)
    birthday.setFullYear(today.getFullYear())

    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1)
    }

    const diffTime = birthday - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    resultDiv.textContent = `До вашего дня рождения осталось ${diffDays} дней.`
}

// Событие нажатия на кнопку
calculateButton.addEventListener('click', calculateDays)

// Скрываем ошибку при вводе даты
birthdayInput.addEventListener('input', function () {
    if (birthdayInput.value) {
        errorMessage.style.display = 'none'
        birthdayInput.classList.remove('error-input')
    }
})
