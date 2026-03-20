# Arturo Tapia-Minchez Website

This is a clean multi-page static website organized for GitHub Pages or any simple web host.

## Structure

- `index.html` - opening pre-show / landing page
- `home.html` - main home page
- `biography.html` - biography + headshots
- `music.html` - music catalog
- `vocal-demos.html` - vocal demos + CV
- `poetry.html` - poetry pages
- `press.html` - press kit and events
- `contact.html` - contact form page
- `assets/css/global.css` - shared styles for the full site
- `assets/js/site.js` - shared navbar, floral overlay, mobile menu, audio toggle, slideshow logic
- `assets/images/floral.svg` - shared floral pattern

## What to edit in one spot

### Navbar across the whole site
Edit `assets/js/site.js`
- Look for `const NAV_ITEMS = [...]`
- Any nav changes there appear on every page

### Floral design across the whole site
Edit either:
- `assets/images/floral.svg` to change the artwork
- `assets/css/global.css` under `.floral-overlay` to change opacity, size, motion, or blend style

### Colors / typography across the whole site
Edit `assets/css/global.css`
- `:root` contains all the main colors

## Publishing to GitHub Pages

1. Upload all files and folders to your GitHub repo root
2. Make sure the homepage is `index.html`
3. Turn on GitHub Pages in repo settings
4. Deploy from the main branch root

## Notes

- Social links are placeholders right now
- Contact form needs a service like Formspree, Netlify Forms, or EmailJS to actually send
- Replace placeholder sections with real bios, media, and scores as needed
