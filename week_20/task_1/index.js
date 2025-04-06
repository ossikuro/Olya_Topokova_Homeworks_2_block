// наша форма
const form = document.getElementById('search-form')

// Добавляем обработчик события "submit" на форму
form.addEventListener('submit', async function (event) {
    // сначала отменяем стандартную отправку на сервер, потому что надо проверить данные
    event.preventDefault()

    const entity = document.getElementById('entity').value // Селект
    const id = document.getElementById('id').value // ID

    //скрытые элементы на все случаи жизни
    const loadingElement = document.getElementById('loading')
    const resultElement = document.getElementById('result')
    const errorElement = document.getElementById('error')

    // стартуем с очистки значений
    resultElement.textContent = ''
    errorElement.textContent = ''

    // Показываем индикатор загрузки (удаляем класс)
    loadingElement.classList.remove('hidden')

    try {
        // Проверка на пустые значения
        if (!entity || !id) {
            throw new Error('Пожалуйста, заполните все поля')
        }

        //отправляем запрос на сервер и ждем ответа
        const response = await fetch(
            `https://swapi.py4e.com/api/${entity}/${id}/`
        )

        if (!response.ok) {
            throw new Error(
                `Мы бороздим просторы галлактики в поисках ответа, но сервер молчит: ${response.status}: ${response.statusText}`
            )
        }

        const data = await response.json()

        // Очищаем содержимое resultElement
        resultElement.textContent = ''

        // вывод результата
        const titleElement = document.createElement('h2')
        titleElement.textContent = 'Результат:'
        resultElement.appendChild(titleElement)

        for (const key in data) {
            // это разметка. заголовок жирный, после него впихиваем :
            const paragraph = document.createElement('p')
            const strong = document.createElement('strong')
            strong.textContent = key
            paragraph.appendChild(strong)
            paragraph.appendChild(document.createTextNode(': '))

            //дальше для значения есть случаи: массив ссылок, одиночная ссылка или просто текст

            if (Array.isArray(data[key])) {
                // Если значение — это массив ссылок
                const list = document.createElement('ul')
                data[key].forEach((link, index) => {
                    const listItem = document.createElement('li')
                    const linkElement = document.createElement('a')
                    linkElement.href = link
                    linkElement.textContent = `${key.replace(/s$/, '')} ${
                        index + 1
                    }` // Присваиваем понятное название ссылке
                    listItem.appendChild(linkElement)
                    list.appendChild(listItem)
                })
                paragraph.appendChild(list)
            } else if (
                typeof data[key] === 'string' &&
                data[key].startsWith('http')
            ) {
                // Если значение — это ссылка
                const linkElement = document.createElement('a')
                linkElement.href = data[key]
                linkElement.textContent = key // Присваиваем название ссылке
                paragraph.appendChild(linkElement)
            } else if (key === 'created' || key === 'edited') {
                continue // Пропускаем свойства created и edited
            } else {
                // Для текста
                paragraph.appendChild(document.createTextNode(data[key]))
            }

            resultElement.appendChild(paragraph)
        }
    } catch (error) {
        errorElement.textContent = `Ошибка: ${error.message}`
        console.error(error)
    } finally {
        // Скрываем индикатор загрузки
        loadingElement.classList.add('hidden')
    }
})
