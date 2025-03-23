const heroes = [
    {
        name: 'Бетмен',
        universe: 'DC Comics',
        alterego: 'Брюс Уэйн',
        occupation: 'борец с преступностью, филантроп, миллиардер',
        friends: 'Робин, Бэтгерл',
        superpowers:
            'интеллект, обширные познания, знания боевых искусств, ловкость',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5EBIdEtdYzoSivMBs_dXv3Dv2BRLBNVGD338F4KQnJOOLsS2',
        info: 'По популярности человек-летучая мышь может сравниться только с Суперменом...',
    },
    {
        name: 'Супермен',
        universe: 'DC Comics',
        alterego: 'Кларк Кент',
        occupation: 'борец за справедливость',
        friends: 'собака Крипто',
        superpowers:
            'непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух, классный костюм',
        url: 'https://gtavrl.ru/public/pic500f45a.jpg',
        info: 'Полная противоположность своему противнику Бэтмену...',
    },
    // Другие супергерои...
]

function createHeroCard(hero) {
    const card = document.createElement('div')
    card.classList.add('hero-card')

    const img = document.createElement('img')
    img.src = hero.url
    img.alt = hero.name

    const info = document.createElement('div')
    info.classList.add('hero-info')

    const name = document.createElement('h2')
    name.textContent = hero.name

    const universe = document.createElement('p')
    universe.textContent = `Вселенная: ${hero.universe}`

    const alterego = document.createElement('p')
    alterego.textContent = `Альтер эго: ${hero.alterego}`

    const occupation = document.createElement('p')
    occupation.textContent = `Профессия: ${hero.occupation}`

    const friends = document.createElement('p')
    friends.textContent = `Друзья: ${hero.friends}`

    const superpowers = document.createElement('p')
    superpowers.textContent = `Суперспособности: ${hero.superpowers}`

    const description = document.createElement('p')
    description.textContent = hero.info

    const ratingDiv = document.createElement('div')
    ratingDiv.classList.add('rating')

    const ratingLabel = document.createElement('label')
    ratingLabel.textContent = 'Оцените героя:'

    const ratingStars = document.createElement('div')
    ratingStars.classList.add('stars')

    // Добавляем звезды
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span')
        star.classList.add('star')
        star.textContent = '★'

        // Применяем класс "filled" для заполненных звезд
        if (i <= (localStorage.getItem(hero.name) || 0)) {
            star.classList.add('filled')
        }

        // Обработчик клика по звезде
        star.addEventListener('click', () => {
            // Сохраняем рейтинг в localStorage
            localStorage.setItem(hero.name, i)
            updateStars(hero, ratingStars)
        })

        ratingStars.appendChild(star)
    }

    // Функция для обновления звездочек
    const updateStars = (hero, ratingStars) => {
        Array.from(ratingStars.children).forEach((star, index) => {
            if (index < (localStorage.getItem(hero.name) || 0)) {
                star.classList.add('filled')
            } else {
                star.classList.remove('filled')
            }
        })
    }

    ratingDiv.appendChild(ratingLabel)
    ratingDiv.appendChild(ratingStars)

    info.appendChild(name)
    info.appendChild(universe)
    info.appendChild(alterego)
    info.appendChild(occupation)
    info.appendChild(friends)
    info.appendChild(superpowers)
    info.appendChild(description)
    info.appendChild(ratingDiv)

    card.appendChild(img)
    card.appendChild(info)

    return card
}

function displayHeroes() {
    const gallery = document.getElementById('gallery')
    if (!gallery) {
        console.error('Элемент с id "gallery" не найден!')
        return
    }

    heroes.forEach((hero) => {
        const heroCard = createHeroCard(hero)
        gallery.appendChild(heroCard)
    })
}

displayHeroes()
