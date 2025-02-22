// Создаем пустой массив под чиселки
let numbers = []

// Заполняем сие
for (let i = -10; i <= 10; i++) {
    numbers.push(i)
}

// Удаляем все отрицательные числа из массива
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1)
        i-- // Уменьшаем индекс, чтобы не пропустить следующий элемент, потому что длинна массива изменилась
    }
}

// квадрат чисел
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * numbers[i]
}

// Сортируем числа в порядке убывания (разбирали на звонке)
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] < numbers[j + 1]) {
            // Меняем местами элементы, если текущий меньше следующего
            let temp = numbers[j]
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp
        }
    }
}

// 6. Выводим полученный массив в консоль
console.log(numbers)
