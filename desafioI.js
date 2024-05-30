// script.js

document.addEventListener('DOMContentLoaded', async () => {
    const postsList = document.getElementById('post-data');

    if (!postsList) {
        console.error('Element with id "posts-list" not found');
        return;
    }
    // Función para obtener los posts de la API
    async function fetchPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const posts = await response.json();
            displayPosts(posts);
        } catch (error) {
            console.error('Error fetching the posts:', error);
            displayError(error);
        }
    }

    // Función para mostrar los posts en una lista desordenada
    function displayPosts(posts) {
        postsList.innerHTML = '';
        posts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.classList.add('my-3', 'p-3', 'bg-light', 'border');
            listItem.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            `;
            postsList.appendChild(listItem);
        });
    }

    // Función para mostrar un mensaje de error
    function displayError(error) {
        postsList.innerHTML = `<li class="text-danger">Error: ${error.message}</li>`;
    }

    // Llamar a la función para obtener los posts
   // fetchPosts();
   window.fetchPosts = fetchPosts;
});