import { curseWords } from './curseWords.mjs'

// 🔹 UI-элементы
const UI_ELEMENTS = {
    nameInput: document.getElementById('name_input'),
    avatarInput: document.getElementById('avatar_input'),
    commentInput: document.getElementById('comment_input'),
    sendCommentButton: document.getElementById('send_comment'),
    commentsList: document.getElementById('comments_list'),
}

// 🔹 Список случайных имен
const RANDOM_NAMES = [
    'Белый Снегокат',
    'Зеленый фаервол',
    'Синий-синий Иней',
    'FrontMen',
    'GiHun',
]

//Список случайных аватарок
const RANDOM_AVATARS = [
    './assets/avatar-1.jpg',
    './assets/avatar-2.jpg',
    './assets/avatar-3.jpg',
    './assets/avatar-4.jpg',
    './assets/avatar-5.jpg',
]

// 🔹 Функция для генерации случайного индекса
function getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength)
}

// 🔹 Функция для преобразования имени
function transformUserName() {
    const sourceUserName = UI_ELEMENTS.nameInput.value.trim()

    if (sourceUserName !== '') {
        return (
            sourceUserName[0].toUpperCase() +
            sourceUserName.slice(1).toLowerCase()
        )
    }
    return RANDOM_NAMES[getRandomIndex(RANDOM_NAMES.length)]
}

// 🔹 Функция для проверки комментария
function transformComment() {
    const sourceComment = UI_ELEMENTS.commentInput.value.trim()
    if (sourceComment === '') return ''

    const words = sourceComment.split(' ')

    for (let i = 0; i < words.length; i++) {
        if (curseWords.includes(words[i].toLowerCase())) {
            words[i] =
                words[i][0] +
                '*'.repeat(words[i].length - 2) +
                words[i][words[i].length - 1]
        }
    }

    return words.join(' ')
}

// 🔹 Функция для получения аватарки
// 🔹 Функция для получения аватарки
function getAvatar(defaultAvatar = './assets/avatar.jpg') {
    const avatarInput = UI_ELEMENTS.avatarInput.value.trim()

    // Если поле пустое, выбираем случайную аватарку
    if (avatarInput === '') {
        return RANDOM_AVATARS[getRandomIndex(RANDOM_AVATARS.length)]
    }

    return avatarInput || defaultAvatar
}

// 🔹 Проверка ввода комментария
function inputCheck(event) {
    const isEmpty = event.target.value.trim() === ''
    UI_ELEMENTS.sendCommentButton.toggleAttribute('disabled', isEmpty)
}

// 🔹 Функция для вывода комментария
function outputComment() {
    // Собираем данные
    const userName = transformUserName()
    const userComment = transformComment()
    const userAvatar = getAvatar()

    // Создаем элементы
    const comment = document.createElement('article')
    const userAvatarRender = document.createElement('img')
    const userWrapper = document.createElement('div')
    const userNameRender = document.createElement('div')
    const userCommentRender = document.createElement('div')

    // Заполняем контент
    userNameRender.innerText = userName
    userCommentRender.innerText = userComment
    userAvatarRender.setAttribute('src', userAvatar)

    // Добавляем элементы в DOM
    UI_ELEMENTS.commentsList.append(comment)
    comment.append(userAvatarRender)
    comment.append(userWrapper)
    userWrapper.append(userNameRender)
    userWrapper.append(userCommentRender)

    // Назначаем стили
    comment.classList.add('comment_wrapper')
    userWrapper.classList.add('user_wrapper')
    userAvatarRender.classList.add('avatar')
    userNameRender.classList.add('user_name')

    // Очищаем поля ввода
    UI_ELEMENTS.nameInput.value = ''
    UI_ELEMENTS.avatarInput.value = ''
    UI_ELEMENTS.commentInput.value = ''
}

// 🔹 Назначение обработчиков событий
UI_ELEMENTS.sendCommentButton.addEventListener('click', outputComment)
UI_ELEMENTS.commentInput.addEventListener('input', inputCheck)
