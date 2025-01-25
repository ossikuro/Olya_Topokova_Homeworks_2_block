const newTaskField = document.getElementById('new_task_field')
const submitTask = document.getElementById('submit_task')
const taskList = document.getElementById('main_list')
const emptyList = document.getElementById('empty_list')

submitTask.addEventListener('click', function () {
    // Создаем запчасти новой задачи
    const newTask = document.createElement('li')
    const newTaskCheckbox = document.createElement('input')
    const newTaskText = document.createElement('div')

    // Удаляем сообщение "Список пуст", если оно есть
    if (emptyList) {
        emptyList.remove()
    }

    // Добавляем запчасти на страницу
    taskList.append(newTask)
    newTask.append(newTaskCheckbox)
    newTask.append(newTaskText)

    // Добавляем контент и атрибуты
    newTaskText.textContent = newTaskField.value
    newTaskCheckbox.type = 'checkbox'

    // Добавляем стили
    newTask.classList.add('task')
    newTaskCheckbox.classList.add('task_checkbox')
    newTaskText.classList.add('task_text')

    // Очищаем поле
    newTaskField.value = ''

    // Добавляем вычеркивание чекбокс
    newTaskCheckbox.addEventListener('change', function () {
        if (newTaskCheckbox.checked) {
            newTaskText.style.textDecoration = 'line-through'
        } else {
            newTaskText.style.textDecoration = 'none'
        }
    })
})
