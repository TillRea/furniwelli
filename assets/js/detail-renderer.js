document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  const id = urlParams.get('id');

  if (!category || !id) {
    document.getElementById('main').innerHTML = '<div class="container" style="padding:4rem 0; text-align:center;"><h2>Product Not Found.</h2><a href="products.html" class="btn btn-primary">Return to Products</a></div>';
    return;
  }

  fetch(category + '.json')
    .then(response => response.json())
    .then(data => {
      const index = data.findIndex(item => item.id === id);
      if (index === -1) throw new Error("Item not found");
      
      const item = data[index];
      const displayTitle = item.title.replace(/-/g, ' ');

      // Breadcrumbs
      const bcCategory = document.getElementById('bc-category');
      if (bcCategory) {
        bcCategory.textContent = category.replace(/-/g, ' ');
        // Set proper link back based on category
        if (category.includes('factory')) {
           bcCategory.href = 'our-factory.html';
        } else {
           bcCategory.href = 'products.html';
        }
      }
      
      const bcProduct = document.getElementById('bc-product');
      if (bcProduct) bcProduct.textContent = displayTitle;

      // Product Info
      document.title = displayTitle + " | Furniwell Indonesia";
      document.getElementById('product-kicker').textContent = item.kicker;
      document.getElementById('product-title').textContent = displayTitle;
      
      const descEl = document.getElementById('product-description');
      if (item.description) {
        descEl.textContent = item.description;
      } else {
        descEl.textContent = "Detailed specifications, dimensions, and material options for this item will be provided upon request.";
      }

      // Quote Button
      const btnQuote = document.getElementById('btn-quote');
      if (btnQuote) {
        btnQuote.href = `contact.html?product=${encodeURIComponent(displayTitle)}#rfq`;
      }

      // Gallery
      const mainImage = document.getElementById('main-image');
      const thumbStrip = document.getElementById('thumbnail-strip');
      
      mainImage.src = item.cover_image;
      mainImage.alt = displayTitle;
      
      if (item.gallery && item.gallery.length > 0) {
        item.gallery.forEach((imgSrc, i) => {
          const thumb = document.createElement('img');
          thumb.src = imgSrc;
          thumb.alt = displayTitle + ' thumbnail ' + (i + 1);
          thumb.style.height = '80px';
          thumb.style.width = '106px';
          thumb.style.objectFit = 'cover';
          thumb.style.cursor = 'pointer';
          thumb.style.opacity = i === 0 ? '1' : '0.6';
          thumb.style.border = i === 0 ? '2px solid var(--blue)' : '2px solid transparent';
          thumb.style.transition = 'opacity 0.2s';
          
          thumb.addEventListener('click', () => {
            mainImage.src = imgSrc;
            // Reset all thumbs
            Array.from(thumbStrip.children).forEach(c => {
              c.style.opacity = '0.6';
              c.style.border = '2px solid transparent';
            });
            // Highlight active
            thumb.style.opacity = '1';
            thumb.style.border = '2px solid var(--blue)';
          });
          
          thumbStrip.appendChild(thumb);
        });
      }

      // Navigation (Next / Prev)
      const btnPrev = document.getElementById('btn-prev');
      const btnNext = document.getElementById('btn-next');
      
      if (index > 0) {
        const prevItem = data[index - 1];
        btnPrev.href = `detail.html?category=${category}&id=${prevItem.id}`;
        btnPrev.style.display = 'inline-flex';
      }
      
      if (index < data.length - 1) {
        const nextItem = data[index + 1];
        btnNext.href = `detail.html?category=${category}&id=${nextItem.id}`;
        btnNext.style.display = 'inline-flex';
      }
    })
    .catch(error => {
      console.error("Error loading product detail:", error);
      document.getElementById('main').innerHTML = '<div class="container" style="padding:4rem 0; text-align:center;"><h2>Product Not Found.</h2><a href="products.html" class="btn btn-primary">Return to Products</a></div>';
    });
});
