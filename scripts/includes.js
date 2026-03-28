
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
});
