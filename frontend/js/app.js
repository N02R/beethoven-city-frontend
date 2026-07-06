const API_URL = "/wp-json/wp/v2/posts";

const container = document.getElementById("posts-container");

container.innerHTML = "<p>⏳ جاري الاتصال بـ WordPress...</p>";

fetch(API_URL)
  .then(response => {
    container.innerHTML += "<p>✅ تم استلام Response من السيرفر.</p>";
    return response.json();
  })
  .then(posts => {
    container.innerHTML = `<p>✅ تم تحميل ${posts.length} منشور.</p>`;
    
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
    container.innerHTML = `
      <h3>❌ حدث خطأ</h3>
      <pre>${err.name}</pre>
      <pre>${err.message}</pre>
    `;
  });