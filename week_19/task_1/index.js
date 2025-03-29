/** шаблон поста*/
function getPostElement(post) {
    const postElement = document.createElement('div')
    postElement.classList.add('post')

    const titleElement = document.createElement('h2')
    titleElement.classList.add('post-title')
    titleElement.textContent = post.title

    const bodyElement = document.createElement('p')
    bodyElement.classList.add('post-body')
    bodyElement.textContent = post.body

    const userIdElement = document.createElement('p')
    userIdElement.textContent = `Пользователь: ${post.userId}`

    postElement.append(titleElement, bodyElement, userIdElement)

    return postElement
}

/** добавление поста на страницу */
function addPostToContainer(container, postElement) {
    container.append(postElement)
}

/** запрос контента и запуск постов */
async function loadPosts() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        )
        const posts = await response.json()

        const container = document.getElementById('posts-container')
        posts.forEach((post) => {
            const postElement = getPostElement(post)
            addPostToContainer(container, postElement)
        })
    } catch (error) {
        console.error('Произошла ошибка:', error)
        const container = document.getElementById('posts-container')
        container.textContent = 'Мы продолбались и не смогли загрузить посты'
    }
}

// Вызываем функцию для загрузки и отображения постов
loadPosts()
