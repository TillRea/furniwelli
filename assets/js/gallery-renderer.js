const GalleryRenderer = {
  renderGallery: function(gridId, jsonFile, categoryName, limit = null) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    fetch(jsonFile)
      .then(response => response.json())
      .then(data => {
        grid.innerHTML = "";
        const itemsToRender = limit ? data.slice(0, limit) : data;
        itemsToRender.forEach(item => {
          const article = document.createElement("article");
          article.className = "card";
          
          // Reformat title
          const displayTitle = item.title.replace(/-/g, ' ');
          
          article.innerHTML = `
            <img class="card-media" src="${item.cover_image}" alt="${displayTitle}" loading="lazy">
            <div class="card-body">
              <span class="kicker">${item.kicker}</span>
              <h3>${displayTitle}</h3>
              <p>${item.photo_count} Photos</p>
              <a href="detail.html?category=${categoryName}&id=${item.id}" class="btn btn-light-outline" style="margin-top: 1rem;">View Details</a>
            </div>
          `;
          grid.appendChild(article);
        });
      })
      .catch(error => console.error("Error loading " + jsonFile + ":", error));
  }
};
