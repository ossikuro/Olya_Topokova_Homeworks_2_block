function getTemperatures() {
    const cities = ['Москва', 'Лондон', 'Париж', 'Нью-Йорк', 'Токио']
    let temperatures = []

    for (let i = 0; i < cities.length; i++) {
        let temp = prompt(`Введите температуру для ${cities[i]}`)

        if (isNaN(temp) || temp === null || temp.trim() === '') {
            alert('Ошибка! Введите число.')
            i-- // Повторить ввод для этого города
        } else {
            temperatures.push({ city: cities[i], temp: Number(temp) })
        }
    }

    displayTemperatures(temperatures)
}

function displayTemperatures(temperatures) {
    const list = document.getElementById('temperatureList')

    // Удаляем все элементы списка
    list.innerText = ''

    let maxTemp = temperatures[0].temp
    let minTemp = temperatures[0].temp
    let maxCity = temperatures[0].city
    let minCity = temperatures[0].city

    for (let i = 0; i < temperatures.length; i++) {
        const li = document.createElement('li')
        li.textContent =
            temperatures[i].city + ': ' + temperatures[i].temp + '°C'
        list.appendChild(li)

        if (temperatures[i].temp > maxTemp) {
            maxTemp = temperatures[i].temp
            maxCity = temperatures[i].city
        }
        if (temperatures[i].temp < minTemp) {
            minTemp = temperatures[i].temp
            minCity = temperatures[i].city
        }
    }

    document.getElementById('maxTemp').textContent =
        'Максимальная температура: ' + maxCity + ' (' + maxTemp + '°C)'
    document.getElementById('minTemp').textContent =
        'Минимальная температура: ' + minCity + ' (' + minTemp + '°C)'
}
