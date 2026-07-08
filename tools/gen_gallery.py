import os
import urllib.parse

files = os.listdir('assets/images/New')
hero = 'WhatsApp Image 2026-07-06 at 20.52.42.jpeg'

html = f"""<section class="section-dark">
<div class="container wide-content">
  <div class="section-head">
    <div>
      <span class="kicker" data-i18n="shipping.galleryKicker">Shipping Documentation</span>
      <h2 data-i18n="shipping.galleryTitle">Export Packing &amp; Loading Proof</h2>
      <p data-i18n="shipping.galleryText">Real visibility into our packing methods and container loading procedures.</p>
    </div>
  </div>
  <div class="project-card" style="background-image: url('assets/images/New/{urllib.parse.quote(hero)}'); margin-bottom: 32px;">
    <div style="z-index: 10;">
      <h3 data-i18n="shipping.heroTitle">Secure Container Loading</h3>
      <p data-i18n="shipping.heroSub">Ensuring safety and efficient space utilization for every export shipment.</p>
    </div>
  </div>
  <div class="gallery-grid">
"""

for f in files:
    if f != hero and f.endswith('.jpeg'):
        src = f"assets/images/New/{urllib.parse.quote(f)}"
        html += f'    <img src="{src}" alt="Export documentation" loading="lazy">\n'

html += """  </div>
</div>
</section>"""

with open('gallery_snippet.html', 'w', encoding='utf-8') as out:
    out.write(html)
