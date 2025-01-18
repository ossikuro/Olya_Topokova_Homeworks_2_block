// описываю галлерею
const galleryImages = [
    './assets/photo_1.jpg',
    './assets/photo_2.jpg',
    './assets/photo_3.jpg',
]
let currentIndex = 0
let currentImage = document.getElementById('image_source')

const nextButton = document.getElementById('forward')
const backButton = document.getElementById('back')

function refreshImage() {
    currentImage.src = galleryImages[currentIndex]
}

// делю скорректированный индекс на длинну массива. Если поделить до ровного остатка не может, то результат = скорректированный индекс. Если может - сбрасывает на 0 индекс (тк остаток = 0)
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length
    refreshImage()
})

backButton.addEventListener('click', () => {
    currentIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length
    refreshImage()
})

refreshImage()
