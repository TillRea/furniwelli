# Changelog — Phase 1 Prototype

## 24 June 2026

- Extracted the supplied WordPress backup without modifying the source.
- Found a rendered WP-Optimize cache containing the old site pages even though no database dump was supplied.
- Reused selected original production, shipment, product, and project images.
- Built a separate static prototype for local review.
- Removed unsupported certification, moisture-content, capacity, and trade-term claims.
- Separated office, showroom/warehouse, and production addresses by function.
- Added verification gates and data requirements for the next implementation step.

## Revision 2 — Navbar cleanup
- Increased usable navbar width on desktop.
- Prevented navigation labels from wrapping.
- Reduced desktop menu spacing and typography slightly.
- Added cleaner active/hover underline states.
- Moved the hamburger breakpoint earlier so the menu never becomes cramped.
- Improved mobile menu spacing, full-width links, and CTA alignment.
- Kept the Furniwell brand name visible on small screens while hiding only the subtitle.

## Revision 3 — Responsive audit fixes
- Audited all 10 local pages at desktop, tablet, and mobile widths using a local-only server.
- Added Returns & Claims to the main navigation and its active-page state.
- Added explicit menu control attributes to the navbar toggle.
- Moved the hamburger breakpoint to 1320px to accommodate the complete navigation safely.
- Reduced long page-hero heading size on mobile.
- Changed the mobile floating WhatsApp control to a compact circular button to reduce content overlap.
- Confirmed local links, image assets, lazy-loaded images, and JavaScript behavior without changing business claims.

### Files changed
- `index.html`
- `about.html`
- `our-factory.html`
- `quality-legality.html`
- `products.html`
- `shipping-terms.html`
- `returns-claims.html`
- `contact.html`
- `articles/caring-for-solid-wood-furniture.html`
- `articles/mortise-and-tenon-joinery.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `CHANGELOG.md`

## Revision 4 — English / Indonesia language switcher
- Added a local English and Indonesia translation system using `data-i18n`.
- Added `assets/js/translations.js` with explicit English and Indonesian copy for all visible translatable content.
- Added EN / ID controls to the navbar on every page.
- Kept the language controls inside the hamburger menu on tablet and mobile.
- Set English as the default language and saved the selected language in `localStorage`.
- Updated the HTML `lang` attribute and translated accessibility labels when the active language changes.
- Preserved brand names, product names, project names, email addresses, phone numbers, physical addresses, and URLs.
- Verified all 10 pages in both languages at 360px, tablet, and desktop widths.

### Files changed
- `index.html`
- `about.html`
- `our-factory.html`
- `quality-legality.html`
- `products.html`
- `shipping-terms.html`
- `returns-claims.html`
- `contact.html`
- `articles/caring-for-solid-wood-furniture.html`
- `articles/mortise-and-tenon-joinery.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/js/translations.js`
- `CHANGELOG.md`

## Revision 7 - Global floating WhatsApp consistency
- Applied the icon-only circular WhatsApp control to every prototype page, including both article pages.
- Removed the homepage-only CSS scope so the icon, size, hover, focus, shadow, and mobile spacing are consistent site-wide.
- Preserved the existing WhatsApp destination and added matching `aria-label` and `title` attributes on every page.

### Files changed
- `about.html`
- `contact.html`
- `our-factory.html`
- `products.html`
- `quality-legality.html`
- `returns-claims.html`
- `shipping-terms.html`
- `articles/caring-for-solid-wood-furniture.html`
- `articles/mortise-and-tenon-joinery.html`
- `assets/css/styles.css`
- `CHANGELOG.md`

## Revision 8 - Floating WhatsApp cache safeguard
- Added versioned CSS and JavaScript references on all pages so browsers do not retain the older text-pill WhatsApp control.
- Added a JavaScript fallback that converts any legacy floating WhatsApp text markup into the same SVG icon control.
- Kept the WhatsApp destination, page layout, bilingual system, and other components unchanged.

### Files changed
- `index.html`
- `about.html`
- `contact.html`
- `our-factory.html`
- `products.html`
- `quality-legality.html`
- `returns-claims.html`
- `shipping-terms.html`
- `articles/caring-for-solid-wood-furniture.html`
- `articles/mortise-and-tenon-joinery.html`
- `assets/js/main.js`
- `CHANGELOG.md`

## Revision 6 — Homepage WhatsApp and RFQ CTA refinements
- Replaced the homepage floating WhatsApp text pill with a 56–58px icon-only circular control.
- Preserved the existing WhatsApp destination and added `aria-label` and `title` attributes.
- Added subtle hover, focus, and shadow states while keeping safe viewport spacing.
- Refined the homepage green RFQ section into a two-column desktop/tablet layout and a stacked mobile layout.
- Increased the RFQ button size, kept its label on one line, and added a small arrow.
- Updated the English CTA text to “Start RFQ” while preserving “Mulai RFQ” in Indonesia.
- Verified both languages at 360px, 768px, and 1366px without horizontal overflow or content overlap.

### Files changed
- `index.html`
- `assets/css/styles.css`
- `assets/js/translations.js`
- `CHANGELOG.md`

## Revision 5 — Homepage hero product collage
- Changed only the homepage hero to a responsive CSS Grid layout.
- Kept the existing workshop photograph as the hero background with a stronger left-to-right readability overlay.
- Added a large `product-lounge.webp` image and a smaller overlapping `product-round-table.webp` image from the existing local assets.
- Added a bilingual “Explore All Products / Lihat Semua Produk” CTA linking to `products.html`.
- Preserved the existing hero copy, translation keys, navbar, footer, brand colours, and all other page sections.
- Added explicit image dimensions, descriptive English alt text, and eager loading for the main product image.
- Verified the hero at 360px, 768px, 1366px, and 1920px in English and Indonesia.

### Files changed
- `index.html`
- `assets/css/styles.css`
- `assets/js/translations.js`
- `CHANGELOG.md`
