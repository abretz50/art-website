
if (window.history && window.history.replaceState) {
  let cleanPath = location.pathname.replace(/index\.html$/, "");
  if (cleanPath.length > 1 && cleanPath.endsWith("/")) {
    cleanPath = cleanPath.slice(0, -1);
  }
  if (cleanPath !== location.pathname) {
    history.replaceState(null, "", cleanPath + location.search + location.hash);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const depth = document.body.dataset.depth || ".";
  const mount = async (selector, file) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const res = await fetch(file);
    el.innerHTML = await res.text();
  };

  await mount("#site-sidebar", `${depth}/components/sidebar.html`);
  await mount("#site-footer", `${depth}/components/footer.html`);

  document.querySelectorAll("[data-nav-href]").forEach(el => {
    const target = el.dataset.navHref;
    el.setAttribute("href", depth === "." ? target : `${depth}/${target}`);
  });

  const current = document.body.dataset.page || "";
  document.querySelectorAll("[data-page-target]").forEach(el => {
    if (el.dataset.pageTarget === current) {
      el.classList.add("active");
      const subnav = el.closest(".subnav");
      if (subnav) {
        const item = subnav.closest(".nav-item");
        if (item) item.classList.add("open");
        const toggle = subnav.previousElementSibling;
        if (toggle) toggle.classList.add("active");
      }
    }
  });

  document.querySelectorAll(".dropdown-toggle").forEach(button => {
    button.addEventListener("click", () => {
      button.parentElement.classList.toggle("open");
    });
  });

  const navToggle = document.getElementById("nav-toggle");
  const sidebarEl = document.querySelector(".sidebar");
  if (navToggle && sidebarEl) {
    const closeNav = () => {
      sidebarEl.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    };
    navToggle.addEventListener("click", () => {
      const isOpen = sidebarEl.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    sidebarEl.querySelectorAll(".nav-link, .subnav a").forEach(link => {
      link.addEventListener("click", closeNav);
    });
    window.addEventListener("scroll", () => {
      if (sidebarEl.classList.contains("nav-open")) closeNav();
    }, { passive: true });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      const name = data.get("name") || "";
      const email = data.get("email") || "";
      const inquiryType = data.get("inquiryType") || "General";
      const subject = data.get("subject") || "";
      const message = data.get("message") || "";
      const mailSubject = `[${inquiryType}] ${subject || "Website inquiry"}`;
      const mailBody = `${message}\n\n---\nFrom: ${name} <${email}>`;
      window.location.href = `mailto:arttapiaminchez.composer@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    });
  }
});
