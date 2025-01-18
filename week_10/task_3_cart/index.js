// пишем цену снаружи, потому что скорее всего где-то есть каталог цен на товар
let showPriceBtn = document.getElementById('showPrice')

// стоимость типа товара в правильном формате
function calculateTotalPrice(price, quantity = 0) {
    const totalItemPrice = quantity * price
    return totalItemPrice.toLocaleString('ru-RU')
}

// то, что должны выплюнуть по клику на кнопку
showPriceBtn.addEventListener('click', () => {
    // парсим кол-во от UI
    const clientsQuantity = parseFloat(
        document.getElementById('quantity').value
    )
    let currentItemPrice = 10000
    const uiTotalPrice = calculateTotalPrice(currentItemPrice, clientsQuantity)
    if (clientsQuantity > 0) {
        alert(uiTotalPrice + ' ₽')
    } else {
        alert('корзина пуста')
    }
})
