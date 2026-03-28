
# Arturo Tapia-Minchez Website Starter

This package is organized to make editing easy.

## Folder structure
- `index.html` → home page
- `pages/` → all main page groups and subpages
- `components/` → shared sidebar and footer loaded into every page
- `styles/site.css` → sitewide styling
- `scripts/includes.js` → loads shared navbar/footer and handles dropdowns
- `assets/audio` → placeholder audio files
- `assets/video` → placeholder video files
- `assets/photos` → placeholder image files

## How shared pieces work
Every page includes:
- `#site-sidebar`
- `#site-footer`
- `scripts/includes.js`

That script loads the shared floating sidebar and footer automatically.

## Easy editing
- Change navigation once in `components/sidebar.html`
- Change the footer once in `components/footer.html`
- Update colors/fonts/layout in `styles/site.css`
- Replace placeholders in the `assets` folders with real media later

## Notes
This starter uses filler content for now and is based on a composer-style site structure with elegant page sections, dropdown navigation, and a left-side floating interface.
