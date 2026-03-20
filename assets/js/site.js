const SITE_ROOT = (() => {
  const depth = Number(document.body.dataset.depth || 0);
  return depth > 0 ? '../'.repeat(depth) : './';
})();

const NAV_ITEMS = [
  { href: 'index.html', label: 'Opening Pre-Show' },
  { href: 'home.html', label: 'Home' },
  { href: 'biography.html', label: 'Biography', children: [
    { href: 'biography.html#headshots', label: 'Official Headshots' }
  ]},
  { href: 'music.html', label: 'Music Catalog', children: [
    { href: 'music.html#choral', label: 'Choral' },
    { href: 'music.html#instrumental', label: 'Instrumental' },
    { href: 'music.html#large-ensemble', label: 'Large Ensemble' },
    { href: 'music.html#chamber-ensemble', label: 'Chamber Ensemble' },
    { href: 'music.html#works-list', label: 'Full Works List' }
  ]},
  { href: 'vocal-demos.html', label: 'Vocal Demos', children: [
    { href: 'vocal-demos.html#cv', label: 'Artist CV' }
  ]},
  { href: 'poetry.html', label: 'Poetry', children: [
    { href: 'poetry.html#intro-poetry', label: 'Intro to My Poetry' },
    { href: 'poetry.html#poetry-demos', label: 'Poetry Demos' },
    { href: 'poetry.html#little-book', label: 'My Little Book of Spells, Prayers, and Thoughts' }
  ]},
  { href: 'press.html', label: 'Press Kit & Events' },
  { href: 'contact.html', label: 'Contact' }
];

function withRoot(path) {
  return `${SITE_ROOT}${path}`;
}

function createNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = NAV_ITEMS.map(item => {
    const active = current === item.href ? ' active' : '';
    const children = item.children ? `
      <div class="subnav">
        ${item.children.map(child => {
          const childPage = child.href.split('#')[0];
          const childActive = current === childPage ? ' active' : '';
          return `<a class="sub-link${childActive}" href="${withRoot(child.href)}">${child.label}</a>`;
        }).join('')}
      </div>` : '';

    return `
      <a class="nav-link${active}" href="${withRoot(item.href)}">${item.label}</a>
      ${children}
    `;
  }).join('');

  return `
    <aside class="sidebar" id="sidebar">
      <div class="brand">
        <h1>Arturo<br>Tapia-Minchez</h1>
        <p>Composer • Vocalist • Poet</p>
      </div>
      <nav class="nav-group">
        ${navLinks}
      </nav>
      <div class="controls">
        <button id="soundToggle" type="button">Sound: Off</button>
        <a class="button" href="${withRoot('home.html')}">Return Home</a>
      </div>
    </aside>
  `;
}

function injectSharedLayout() {
  const floral = document.createElement('div');
  floral.className = 'floral-overlay';
  document.body.prepend(floral);

  const mobile = document.querySelector('[data-mobile-topbar]');
  if (mobile) {
    mobile.innerHTML = `
      <strong>Arturo Tapia-Minchez</strong>
      <button class="menu-btn" id="menuToggle" type="button">Menu</button>
    `;
  }

  const mount = document.querySelector('[data-site-nav]');
  if (mount) mount.innerHTML = createNav();

  const footer = document.querySelector('[data-site-footer]');
  if (footer) {
    footer.innerHTML = `© <span id="year"></span> Arturo Tapia-Minchez • Composer • Vocalist • Poet`;
  }
}

function initMenu() {
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  }
}

function initFooterYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

function initSlideshow() {
  const slideshows = document.querySelectorAll('[data-slideshow]');
  slideshows.forEach(show => {
    const slides = Array.from(show.querySelectorAll('.slide'));
    const dots = Array.from(show.querySelectorAll('.dot'));
    if (!slides.length) return;
    let active = 0;
    const render = index => {
      slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
      active = index;
    };
    render(0);
    setInterval(() => render((active + 1) % slides.length), 4500);
  });
}

function initAudio() {
  let audioEnabled = false;
  let audioCtx;
  const soundToggle = document.getElementById('soundToggle');
  const welcomeButton = document.getElementById('welcomeButton');

  function ensureAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function playTone(freq = 660, start = 0, duration = 0.18, gainAmount = 0.04) {
    if (!audioEnabled) return;
    const ctx = ensureAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime + start);
    gain.gain.exponentialRampToValueAtTime(gainAmount, ctx.currentTime + start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime + start);
    osc.stop(ctx.currentTime + start + duration + 0.02);
  }

  function playChimeSequence() {
    playTone(523.25, 0.00, 0.22, 0.05);
    playTone(659.25, 0.14, 0.24, 0.045);
    playTone(783.99, 0.28, 0.30, 0.04);
  }

  if (soundToggle) {
    soundToggle.addEventListener('click', async () => {
      audioEnabled = !audioEnabled;
      if (audioEnabled) {
        ensureAudio();
        if (audioCtx.state === 'suspended') await audioCtx.resume();
        soundToggle.textContent = 'Sound: On';
        playChimeSequence();
      } else {
        soundToggle.textContent = 'Sound: Off';
      }
    });
  }

  if (welcomeButton) {
    welcomeButton.addEventListener('click', async () => {
      if (!audioEnabled) {
        audioEnabled = true;
        ensureAudio();
        if (audioCtx.state === 'suspended') await audioCtx.resume();
        if (soundToggle) soundToggle.textContent = 'Sound: On';
      }
      playChimeSequence();
    });
  }

  document.addEventListener('mouseover', event => {
    const link = event.target.closest('.nav-link, .sub-link, .button');
    if (!link || !audioEnabled) return;
    const notes = [523.25, 587.33, 659.25, 698.46, 783.99, 880.0, 987.77];
    const index = Array.from(document.querySelectorAll('.nav-link, .sub-link, .button')).indexOf(link);
    playTone(notes[(index >= 0 ? index : 0) % notes.length], 0, 0.12, 0.02);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  injectSharedLayout();
  initMenu();
  initFooterYear();
  initSlideshow();
  initAudio();
});
