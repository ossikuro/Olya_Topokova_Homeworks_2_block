import { curseWords } from './curseWords.mjs'

// Функция для преобразования имени
function transformUserName() {
    // Получаем значение из поля ввода и обрезаем лишние пробелы
    const sourceUserName = document.getElementById('name_input').value.trim()

    // Проверяем, что строка не пуста
    if (sourceUserName !== '') {
        // Преобразуем первую букву в верхний регистр и остальные в нижний
        return (
            sourceUserName[0].toUpperCase() +
            sourceUserName.slice(1).toLowerCase()
        )
    } else {
        // Массив случайных имен
        const randomNames = [
            'Белый Снегокат',
            'Зеленый фаервол',
            'Синий-синий Иней',
        ]

        // Генерация случайного индекса
        const randomIndex = Math.floor(Math.random() * randomNames.length)

        // Возвращаем случайное имя из массива
        return randomNames[randomIndex]
    }
}

//Фцнкция для проверки комментария
function transformComment() {
    const sourceComment = document.getElementById('comment_input').value.trim()

    //Тоже проверяем, что строка не пуста
    if (sourceComment !== '') {
        // Разбиваем комментарий на отдельные слова
        let words = sourceComment.split(' ')

        // Проходим по каждому слову, опять старт-условие, че делаем
        for (let i = 0; i < words.length; i++) {
            // Проверяем, если слово есть в массиве запрещённых слов
            if (curseWords.includes(words[i].toLowerCase())) {
                // Запикиваем слово (первую и последнюю букву оставляем, остальные заменяем на *)
                let word = words[i]
                words[i] =
                    word[0] +
                    '*'.repeat(word.length - 2) +
                    word[word.length - 1]
            }
        }
        const userComment = words.join(' ')

        return userComment
    }
}

//Функция для ссылки на аватарку
function getAvatar(defaultAvatar = './assets/avatar.jpg') {
    const avatar = document.getElementById('avatar_input').value.trim()
    if (avatar !== '') {
        return avatar
    } else {
        return defaultAvatar
    }
}

//отслеживалка изменения
const inputComment = document.getElementById('comment_input')
const button = document.getElementById('send_comment')
button.addEventListener('click', outputComment)
inputComment.addEventListener('input', inputCheck)

function inputCheck(event) {
    console.log(event.target.value)
    //debugger

    if (event.target.value === '') {
        if (!button.hasAttribute('disabled')) {
            button.toggleAttribute('disabled')
        }
    } else {
        if (button.hasAttribute('disabled')) {
            button.toggleAttribute('disabled')
        }
    }
}

// Функция для вывода комментария
function outputComment() {
    // Собираем данные
    const userName = transformUserName()
    const userComment = transformComment()
    const userAvatar = getAvatar()

    // Определяем, куда будем добавлять комментарий
    const commentList = document.getElementById('comments_list')

    // Создаем элементы
    const comment = document.createElement('article')
    const userAvatarRender = document.createElement('img')
    const userWrapper = document.createElement('div')
    const userNameRender = document.createElement('div')
    const userCommentRender = document.createElement('div')

    // Отправляем значения
    userNameRender.innerText = userName
    userCommentRender.innerText = userComment
    userAvatarRender.setAttribute('src', userAvatar)

    // Добавляем элементы на страницу
    commentList.append(comment)
    comment.append(userAvatarRender)
    comment.append(userWrapper)
    userWrapper.append(userNameRender)
    userWrapper.append(userCommentRender)

    //назначаем стили
    comment.classList.add('comment_wrapper')
    userWrapper.classList.add('user_wrapper')
    userAvatarRender.classList.add('avatar')
    userNameRender.classList
        .add('user_name')

        // Очистить поле ввода после отправки комментария
        .document.getElementById('name_input').value = ''
    document.getElementById('avatar_input').value = ''
    document.getElementById('comment_input').value = ''
}
