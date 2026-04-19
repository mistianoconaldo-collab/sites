const API_KEY = '08823a911c4e47ef9d5b5388c6d6da34';
const URL = `https://newsapi.org/v2/everything?q=Real%20Madrid&apiKey=${API_KEY}`;

async function fetchNews() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const container = document.getElementById('news-container');

        data.articles.forEach(article => {
            const card = document.createElement('article');
            card.className = 'news-card';
            card.innerHTML = `
                <img src="${article.urlToImage}" alt="News Image">
                <h2>${article.title}</h2>
                <p>${article.description || 'No description available.'}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

fetchNews();
