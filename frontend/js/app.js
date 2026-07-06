const API_URL = "http://127.0.0.1:8000/wp-json/wp/v2/posts";

async function loadServices() {
  const container = document.getElementById("posts-container");
  
  try {
    const res = await fetch(API_URL);
    const posts = await res.json();
    
    container.innerHTML = "";
    
    posts.forEach(post => {
      container.innerHTML += `
        <div class="card mb-3 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${post.title.rendered}</h5>
            <p class="card-text">${post.excerpt.rendered}</p>
            <a href="${post.link}" target="_blank" class="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      `;
    });
    
  } catch (error) {
    console.error(error);
    container.innerHTML = "<p>API Error - Check WordPress connection</p>";
  }
}

loadServices();