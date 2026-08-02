const catalogRoot = document.getElementById("catalogRoot");
const catNavList = document.getElementById("catNavList");

const money = (value) => {
  if (window.ADP && typeof window.ADP.money === "function") {
    return window.ADP.money(value);
  }

  if (value === null || value === undefined || value === "") {
    return "Consultar";
  }

  return Number(value).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  });
};

const productPlaceholderImage = (label = "Producto") => `${window.ADP && window.ADP.placeholderImageSvg ? window.ADP.placeholderImageSvg(label) : ""}`;

function renderCatalog() {
  if (!catalogRoot || !catNavList) return;

  catNavList.innerHTML = "";
  catalogRoot.innerHTML = "";

  CATALOGO.forEach((categoria) => {
    const chip = document.createElement("a");
    chip.href = "#" + categoria.id;
    chip.className = "chip";
    chip.textContent = categoria.nombre;
    catNavList.appendChild(chip);

    const section = document.createElement("section");
    section.className = "cat-section";
    section.id = categoria.id;

    const head = document.createElement("div");
    head.className = "cat-section-head";
    head.innerHTML = `
      <h2>${categoria.nombre}</h2>
      <span class="cat-count">${categoria.productos.length} productos</span>
    `;

    const grid = document.createElement("div");
    grid.className = "grid";

    categoria.productos.forEach((producto) => {
      const card = document.createElement("article");
      card.className = "card";

      const imgMarkup = producto.imagen
        ? `<img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" onerror="this.onerror=null;this.src='${productPlaceholderImage(producto.nombre)}';">`
        : `
          <div class="img-placeholder">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.4"/>
              <circle cx="12" cy="13" r="3.4" stroke="currentColor" stroke-width="1.4"/>
              <path d="M8 6l1.4-2h5.2L16 6" stroke="currentColor" stroke-width="1.4"/>
            </svg>
            <span>Foto pendiente</span>
          </div>
        `;

      const badge = producto.destacado ? '<span class="badge-promo">DESTACADO</span>' : "";
      const precio = producto.precio === null || producto.precio === undefined ? "Consultar" : money(producto.precio);

      const button = document.createElement("button");
      button.type = "button";
      button.className = "add-btn";
      button.textContent = "+ Agregar";
      button.dataset.id = String(producto.id);
      button.addEventListener("click", () => {
        if (typeof agregarAlCarrito === "function") {
          agregarAlCarrito(producto.id, 1, card);
        }
      });

      const body = document.createElement("div");
      body.className = "card-body";
      body.innerHTML = `
        <div class="card-name">${producto.nombre}</div>
        ${producto.unidad ? `<div class="card-unit">${producto.unidad}</div>` : ""}
        <div class="card-price">${precio}</div>
      `;

      const imgWrap = document.createElement("div");
      imgWrap.className = "card-img";
      imgWrap.innerHTML = `${badge}${imgMarkup}`;

      body.appendChild(button);
      card.appendChild(imgWrap);
      card.appendChild(body);
      grid.appendChild(card);
    });

    section.appendChild(head);
    section.appendChild(grid);
    catalogRoot.appendChild(section);
  });
}

renderCatalog();
