const newTaskField = document.getElementById('new_task_field')
const submitTask = document.getElementById('submit_task')
const taskList = document.getElementById('tasks')
const emptyList = document.getElementById('empty_list')
/** кнопка почистить */
const cleanTasks = document.getElementById('clear_tasks')

let tasks = JSON.parse(localStorage.getItem('tasks')) ?? []

// Загружаем задачи при загрузке страницы
if (tasks.length > 0) {
    emptyList.style.display = 'none'
    cleanTasks.style.display = 'block'
    renderTasks()
}
function renderSingleTask(task) {
    const newTask = document.createElement('li')
    const newTaskCheckbox = document.createElement('input')
    const newTaskText = document.createElement('div')

    newTaskCheckbox.type = 'checkbox'
    newTaskCheckbox.checked = task.checked
    newTaskText.textContent = task.text

    // Добавляем элементы на страницу
    taskList.append(newTask)
    newTask.append(newTaskCheckbox)
    newTask.append(newTaskText)

    newTask.classList.add('task')
    newTaskCheckbox.classList.add('task_checkbox')
    newTaskText.classList.add('task_text')

    // Вычеркивание задачи при изменении состояния чекбокса
    newTaskCheckbox.addEventListener('change', function () {
        // Обновляем состояние задачи в localStorage
        task.checked = newTaskCheckbox.checked
        localStorage.setItem('tasks', JSON.stringify(tasks))
    })
}

/** Функция для рендера задач */
function renderTasks() {
    tasks.forEach((task) => {
        renderSingleTask(task)
    })
}

submitTask.addEventListener('click', function () {
    const taskText = newTaskField.value.trim()

    if (taskText) {
        // Создаём новую задачу
        const newTask = {
            text: taskText,
            checked: false,
        }

        // Добавляем задачу в массив
        tasks.push(newTask)

        // Сохраняем в localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks))

        renderSingleTask(newTask)

        // Очищаем поле ввода
        newTaskField.value = ''

        // Скрываем сообщение "Список пуст"
        emptyList.style.display = 'none'
        cleanTasks.style.display = 'block'
    }
})

// Очистка всех задач
cleanTasks.addEventListener('click', function () {
    tasks = [] // Очищаем массив задач
    localStorage.setItem('tasks', JSON.stringify(tasks)) // Обновляем localStorage

    // Очищаем DOM
    taskList.replaceChildren(emptyList)

    // Показываем сообщение "Список пуст" и скрываем кнопку "Очистить"
    emptyList.style.display = 'flex'
    cleanTasks.style.display = 'none'
})
