const API_URL = "http://127.0.0.1:8000/wp-json/wp/v2/posts";

const container = document.getElementById("posts-container");

fetch(API_URL)
  .then(res => res.json())
  .then(posts => {
    
    posts.forEach(post => {
      
      const card = document.createElement("div");
      card.className = "card mb-3";
      
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${post.title.rendered}</h5>
          <p class="card-text">${post.excerpt.rendered}</p>
        </div>
      `;
      
      container.appendChild(card);
    });
    
  })
  .catch(err => {
    console.log("Error:", err);
    container.innerHTML = "<p>Failed to load data</p>";
  });