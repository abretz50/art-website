
document.addEventListener("DOMContentLoaded", async () => {
  const attach = async (selector, file) => {
    const target = document.querySelector(selector);
    if (!target) return;
    const res = await fetch(file);
    target.innerHTML = await res.text();
  };

  const depth = document.body.dataset.depth || ".";
  await attach("#site-sidebar", `${depth}/components/sidebar.html`);
  await attach("#site-footer", `${depth}/components/footer.html`);

  const current = document.body.dataset.page || "";
  document.querySelectorAll("[data-page-target]").forEach(el => {
    if (el.dataset.pageTarget === current) {
      el.classList.add("active");
      const parentItem = el.closest(".nav-item");
      if (parentItem && parentItem.classList.contains("has-dropdown")) {
        parentItem.classList.add("open");
      }
      const outer = el.closest(".subnav");
      if (outer) {
        const toggle = outer.previousElementSibling;
        if (toggle) toggle.classList.add("active");
        const item = outer.closest(".nav-item");
        if (item) item.classList.add("open");
      }
    }
  });

  document.querySelectorAll(".dropdown-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("open");
    });
  });
});
