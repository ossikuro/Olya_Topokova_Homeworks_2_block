// шаблон поста
function getPostElement(post) {
    const postElement = document.createElement('div')
    postElement.classList.add('post')

    const titleElement = document.createElement('h2')
    titleElement.classList.add('post-title')
    titleElement.textContent = post.title

    const bodyElement = document.createElement('p')
    bodyElement.classList.add('post-body')
    bodyElement.textContent = post.body

    postElement.append(titleElement, bodyElement)

    return postElement
}

// добавление поста
function addPostToContainer(container, postElement) {
    container.append(postElement)
}

// новый пост
async function createPost(title, body) {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: 1, // JSONPlaceholder требует userId
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        )

        const newPost = await response.json()

        const container = document.getElementById('posts-container')
        const postElement = getPostElement(newPost)
        addPostToContainer(container, postElement)
    } catch (error) {
        console.error('Произошла ошибка:', error)
        const container = document.getElementById('posts-container')
        container.textContent = 'Ошибка при создании поста'
    }
}

// Обработчик события отправки формы
document
    .getElementById('post-form')
    .addEventListener('submit', async (event) => {
        event.preventDefault()

        const title = document.getElementById('title').value
        const body = document.getElementById('body').value

        if (title && body) {
            await createPost(title, body)
            document.getElementById('title').value = ''
            document.getElementById('body').value = ''
        } else {
            alert('Пожалуйста, заполните все поля')
        }
    })
