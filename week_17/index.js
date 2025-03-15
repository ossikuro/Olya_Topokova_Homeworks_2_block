class Transport {
    constuctor(type, price, brand) {
        this.type = type
        this.price = price
        this.brand = brand
    }

    getInfo() {
        return `Тип: ${this.type}, Бренд: ${this.brand}`
    }

    getPrice() {
        return `Цена: ${this.price} ₽`
    }
}

class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand)
        this.doors = doors
    }

    getDoorsCount() {
        return `Количество дверей: ${this.doors}`
    }
}

class Bike extends Transport {
    constructor(type, price, brand, speed) {
        super(type, price, brand)
        this.speed = speed
    }

    getMaxSpeed() {
        return `Макс. скорость: ${this.speed} км/ч`
    }
}

const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>',
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>',
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>',
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>',
    },
]

data.forEach((item) => {
    let transport

    if (item.type === 'car') {
        transport = new Car(item.type, item.price, item.doors, item.brand)
        console.log(transport.getInfo()) // Тип: car, Бренд: Audi
        console.log(transport.getPrice()) // Цена: 4 300 000 ₽
        console.log(transport.getDoorsCount()) // Количество дверей: 4
    } else if (item.type === 'bike') {
        transport = new Bike(item.type, item.price, item.brand, item.maxSpeed)
        console.log(transport.getInfo()) // Тип: bike, Бренд: Harley-Davidson
        console.log(transport.getPrice()) // Цена: 1 300 000 ₽
        console.log(transport.getMaxSpeed()) // Макс. скорость: 210 км/ч
    }
})
