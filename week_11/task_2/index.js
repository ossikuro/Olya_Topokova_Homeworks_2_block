// Это корзина товаров
const items = [
    {
        name: 'Сияние | Кинг Стивен',
        image: './assets/6041340032_king.webp',
        publisher: 'АСТ',
        year: '2024',
        paper: 'Газетная',
        price: 356,
    },
    {
        name: 'Демиан | Гессе Герман',
        image: './assets/6830926468_gesse.webp',
        publisher: 'АСТ',
        year: '2024',
        paper: 'Газетная',
        price: 308,
    },
    {
        name: 'Превращение | Кафка Франц',
        image: './assets/6841872975_kafka.webp',
        publisher: 'АСТ',
        year: '2025',
        paper: 'Газетная',
        price: 288,
    },
    {
        name: 'Алхимик | Коэльо Пауло',
        image: './assets/6635960706_koelio.webp',
        publisher: 'АСТ',
        year: '2024',
        paper: 'Газетная',
        price: 391,
    },
]

// Это мы находим куда будем вставлять товары
const itemList = document.querySelector('.item_list')

function renderItems() {
    items.forEach((item) => {
        // Создаём карточку
        const itemCard = document.createElement('article')
        itemCard.classList.add('item')

        // Создаём элементы карточки
        // Картинка
        const itemImage = document.createElement('img')
        itemImage.classList.add('item_image')
        itemImage.src = item.image
        itemImage.alt = item.name

        // Оболочка для описания
        const itemDescription = document.createElement('div')
        itemDescription.classList.add('item_description')

        // Название
        const itemTitle = document.createElement('div')
        itemTitle.classList.add('item_title')
        itemTitle.innerText = item.name

        // Характеристики
        const itemDescriptiveColumn = document.createElement('div')
        itemDescriptiveColumn.classList.add('description_column')

        const itemPublisherLine = document.createElement('div')
        const itemYearLine = document.createElement('div')
        const itemPaperLine = document.createElement('div')

        itemPublisherLine.classList.add('description_line')
        itemYearLine.classList.add('description_line')
        itemPaperLine.classList.add('description_line')

        const itemPublisherTag = document.createElement('div')
        const itemYearTag = document.createElement('div')
        const itemPaperTag = document.createElement('div')

        itemPublisherTag.classList.add('description_title')
        itemYearTag.classList.add('description_title')
        itemPaperTag.classList.add('description_title')

        itemPublisherTag.innerText = 'Издательство'
        itemYearTag.innerText = 'Год'
        itemPaperTag.innerText = 'Бумага'

        const itemPublisherValue = document.createElement('div')
        const itemYearValue = document.createElement('div')
        const itemPaperValue = document.createElement('div')

        itemPublisherValue.classList.add('description_value')
        itemYearValue.classList.add('description_value')
        itemPaperValue.classList.add('description_value')

        itemPublisherValue.innerText = item.publisher
        itemYearValue.innerText = item.year
        itemPaperValue.innerText = item.paper

        //цена
        const itemPrice = document.createElement('div')
        itemPrice.classList.add('item_price')
        itemPrice.innerText = item.price + '₽'

        // Создаем структуру и аппендим все
        itemCard.append(itemImage, itemDescription, itemPrice)
        itemDescription.append(itemTitle, itemDescriptiveColumn)
        itemDescriptiveColumn.append(
            itemPublisherLine,
            itemYearLine,
            itemPaperLine
        )
        itemPublisherLine.append(itemPublisherTag, itemPublisherValue)
        itemYearLine.append(itemYearTag, itemYearValue)
        itemPaperLine.append(itemPaperTag, itemPaperValue)

        // Добавляем карточку в контейнер
        itemList.append(itemCard)
    })
}

renderItems()

//Это про расчет скидок
const applyButton = document.getElementById('apply_discount')
let discountValue = 1
const subSumCalc = items.reduce((sum, item) => sum + item.price, 0)
const totalSum = subSumCalc * discountValue

//функция вывода цен

function showPrice() {
    const subSumElement = document.getElementById('subsum-value-calculation')
    const totalSumElement = document.querySelector('.sum_total_value')

    // Подытог
    subSumElement.innerText = `${subSumCalc.toLocaleString('ru-RU')} ₽`

    // Итоговая сумма с учётом скидки
    totalSumElement.innerText = `${totalSum.toLocaleString('ru-RU')} ₽`
}

showPrice()

applyButton.addEventListener('click', function () {
    //находим запчасти в верстке
    const discountLineElement = document.getElementById('discount_sum_line')
    const discountElement = document.querySelector('.discount_wrapper')
    const discountValueElement = document.getElementById(
        'discount-value-calculation'
    )
    const totalSumElement = document.querySelector('.sum_total_value')

    //расчитываем скидку, которую покаать надо
    discountValue = 0.8

    // Пересчитываем итоговую сумму с учётом скидки
    const totalSum = subSumCalc * discountValue
    const discountValueView = subSumCalc - totalSum

    //управляем версткой
    discountLineElement.style.display = 'flex'
    discountElement.style.display = 'none'
    discountValueElement.innerText = `− ${discountValueView.toLocaleString(
        'ru-RU'
    )} ₽`
    totalSumElement.innerText = `${totalSum.toLocaleString('ru-RU')} ₽`
})
