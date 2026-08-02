/*==================================================
    ALMACÉN DE POLLO
    CART.JS
    Lógica completa del carrito
==================================================*/

const STORAGE_KEY = "almacenDePollo_carrito";
const CLIENTE_KEY = "almacenDePollo_cliente";
const CLEAR_AFTER_SEND_KEY = "almacenDePollo_clearAfterSend";

let carrito = [];

const cartFab = document.getElementById("cartFab");
const cartPanel = document.getElementById("cartPanel");
const cartClose = document.getElementById("cartClose");
const overlay = document.getElementById("overlay");
const ticketBody = document.getElementById("ticketBody");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const sendWaBtn = document.getElementById("sendWa");
const clienteNombre = document.getElementById("clienteNombre");
const clienteDireccion = document.getElementById("clienteDireccion");
const clienteObservaciones = document.getElementById("clienteObservaciones");
const vaciarDespues = document.getElementById("vaciarDespues");
const toast = document.getElementById("toast");

function leerJSONSeguro(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function guardarJSONSeguro(key, valor) {
  try {
    localStorage.setItem(key, JSON.stringify(valor));
  } catch (error) {
    // Ignorar errores de almacenamiento local
  }
}

function cargarCarrito() {
  const guardado = leerJSONSeguro(STORAGE_KEY, []);
  carrito = Array.isArray(guardado) ? guardado : [];
}

function guardarCarrito() {
  guardarJSONSeguro(STORAGE_KEY, carrito);
}

function cargarDatosCliente() {
  const defaultData = { nombre: "", direccion: "", observaciones: "" };
  const data = leerJSONSeguro(CLIENTE_KEY, defaultData);

  if (clienteNombre) clienteNombre.value = data?.nombre || "";
  if (clienteDireccion) clienteDireccion.value = data?.direccion || "";
  if (clienteObservaciones) clienteObservaciones.value = data?.observaciones || "";

  const clearValue = leerJSONSeguro(CLEAR_AFTER_SEND_KEY, false);
  if (vaciarDespues) vaciarDespues.checked = Boolean(clearValue);
}

function guardarDatosCliente() {
  const datos = {
    nombre: clienteNombre ? clienteNombre.value.trim() : "",
    direccion: clienteDireccion ? clienteDireccion.value.trim() : "",
    observaciones: clienteObservaciones ? clienteObservaciones.value.trim() : ""
  };

  guardarJSONSeguro(CLIENTE_KEY, datos);

  if (vaciarDespues) {
    guardarJSONSeguro(CLEAR_AFTER_SEND_KEY, vaciarDespues.checked);
  }
}

function buscarProducto(id) {
  const normalizedId = Number(id);

  for (const categoria of CATALOGO) {
    const producto = categoria.productos.find((p) => Number(p.id) === normalizedId);
    if (producto) return producto;
  }
  return null;
}

function buscarEnCarrito(id) {
  const normalizedId = Number(id);
  return carrito.find((item) => Number(item.id) === normalizedId);
}

function mostrarToast(mensaje) {
  if (!toast) return;

  toast.textContent = mensaje;
  toast.classList.add("show");

  clearTimeout(toast.timerId);
  toast.timerId = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function animarProducto(card) {
  if (!card) return;
  card.classList.remove("is-added");
  void card.offsetWidth;
  card.classList.add("is-added");
  setTimeout(() => card.classList.remove("is-added"), 420);
}

function agregarAlCarrito(id, cantidad = 1, card = null) {
  const producto = buscarProducto(id);
  if (!producto) {
    console.error("Producto inexistente", id);
    return;
  }

  const existente = buscarEnCarrito(producto.id);

  if (existente) {
    existente.cantidad += cantidad;
  } else {
    carrito.push({
      id: Number(producto.id),
      nombre: producto.nombre,
      precio: producto.precio,
      consultar: producto.consultar,
      unidad: producto.unidad,
      imagen: producto.imagen,
      cantidad
    });
  }

  guardarCarrito();
  actualizarCarrito();
  mostrarToast("Producto agregado al carrito");

  if (card) {
    animarProducto(card);
  }
}

function quitarUnidad(id) {
  const producto = buscarEnCarrito(id);
  if (!producto) return;

  producto.cantidad -= 1;

  if (producto.cantidad <= 0) {
    eliminarProducto(id);
    return;
  }

  guardarCarrito();
  actualizarCarrito();
}

function eliminarProducto(id) {
  carrito = carrito.filter((producto) => producto.id !== id);
  guardarCarrito();
  actualizarCarrito();
}

function cambiarCantidad(id, cantidad) {
  const producto = buscarEnCarrito(id);
  if (!producto) return;

  if (cantidad <= 0) {
    eliminarProducto(id);
    return;
  }

  producto.cantidad = cantidad;
  guardarCarrito();
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  actualizarCarrito();
  mostrarToast("Carrito vacío");
}

function cantidadProductos() {
  return carrito.reduce((total, item) => total + item.cantidad, 0);
}

function subtotalProducto(item) {
  if (item.consultar || item.precio === null || item.precio === undefined) {
    return null;
  }
  return item.precio * item.cantidad;
}

function calcularTotal() {
  let total = 0;
  let tieneConsultas = false;

  carrito.forEach((item) => {
    if (item.consultar || item.precio === null || item.precio === undefined) {
      tieneConsultas = true;
      return;
    }

    total += subtotalProducto(item) || 0;
  });

  return { total, tieneConsultas };
}

function formatoPrecio(valor) {
  if (valor === null || valor === undefined || Number.isNaN(Number(valor))) {
    return "Consultar";
  }

  return Number(valor).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  });
}

function actualizarContador() {
  if (!cartCount || !cartFab) return;

  const cantidad = cantidadProductos();
  cartCount.textContent = cantidad;
  cartFab.hidden = cantidad === 0;
}

function actualizarTotal() {
  if (!cartTotal) return;

  const datos = calcularTotal();
  cartTotal.textContent = datos.tieneConsultas
    ? `${formatoPrecio(datos.total)} + Consultar`
    : formatoPrecio(datos.total);
}

function crearItemTicket(item) {
  const subtotal = subtotalProducto(item);
  const div = document.createElement("div");
  div.className = "ticket-row";

  div.innerHTML = `
    <div class="t-name">
      <span>${item.cantidad} × ${item.nombre}</span><br>
      <span class="t-remove" data-remove="${item.id}">quitar</span>
    </div>
    <div class="t-qty-controls">
      <button data-minus="${item.id}" aria-label="Restar uno">−</button>
      <span>${subtotal === null ? "Consultar" : formatoPrecio(subtotal)}</span>
      <button data-plus="${item.id}" aria-label="Sumar uno">+</button>
    </div>
  `;

  return div;
}

function renderizarTicket() {
  if (!ticketBody) return;

  ticketBody.innerHTML = "";

  if (carrito.length === 0) {
    ticketBody.innerHTML = `
      <p class="ticket-empty">Todavía no agregaste productos.<br>Volvé al catálogo y tocá "Agregar".</p>
    `;
    return;
  }

  carrito.forEach((item) => {
    ticketBody.appendChild(crearItemTicket(item));
  });

  ticketBody.querySelectorAll("[data-remove]").forEach((boton) => {
    boton.addEventListener("click", () => eliminarProducto(Number(boton.dataset.remove)));
  });

  ticketBody.querySelectorAll("[data-minus]").forEach((boton) => {
    boton.addEventListener("click", () => quitarUnidad(Number(boton.dataset.minus)));
  });

  ticketBody.querySelectorAll("[data-plus]").forEach((boton) => {
    boton.addEventListener("click", () => agregarAlCarrito(Number(boton.dataset.plus), 1));
  });
}

function construirMensajeWhatsApp() {
  const nombre = clienteNombre ? clienteNombre.value.trim() : "";
  const direccion = clienteDireccion ? clienteDireccion.value.trim() : "";
  const observaciones = clienteObservaciones ? clienteObservaciones.value.trim() : "";

  if (carrito.length === 0) {
    return "https://wa.me/541131405747";
  }

  let mensaje = "¡Hola! Quiero hacer este pedido:\n\n";

  carrito.forEach((item) => {
    const subtotal = subtotalProducto(item);
    const line = subtotal === null
      ? `${item.cantidad} × ${item.nombre} — Consultar precio`
      : `${item.cantidad} × ${item.nombre} — ${formatoPrecio(subtotal)}`;
    mensaje += `• ${line}\n`;
  });

  const total = calcularTotal();
  mensaje += `\nTotal estimado: ${total.tieneConsultas ? `${formatoPrecio(total.total)} + Consultar` : formatoPrecio(total.total)}`;

  if (nombre) mensaje += `\n\nCliente: ${nombre}`;
  if (direccion) mensaje += `\nDirección: ${direccion}`;
  if (observaciones) mensaje += `\nObservaciones: ${observaciones}`;

  mensaje += "\n\n¿Me confirman disponibilidad y coordinamos entrega o retiro?";
  return `https://wa.me/541131405747?text=${encodeURIComponent(mensaje)}`;
}

function actualizarLinkWhatsApp() {
  if (!sendWaBtn) return;
  sendWaBtn.href = construirMensajeWhatsApp();
}

function actualizarCarrito() {
  actualizarContador();
  renderizarTicket();
  actualizarTotal();
  actualizarLinkWhatsApp();
}

function abrirCarrito() {
  if (cartPanel) cartPanel.classList.add("is-open");
  if (overlay) overlay.classList.add("is-open");
}

function cerrarCarrito() {
  if (cartPanel) cartPanel.classList.remove("is-open");
  if (overlay) overlay.classList.remove("is-open");
}

function bindClienteInputs() {
  [clienteNombre, clienteDireccion, clienteObservaciones].forEach((input) => {
    if (!input) return;

    input.addEventListener("input", () => {
      guardarDatosCliente();
      actualizarLinkWhatsApp();
    });
  });

  if (vaciarDespues) {
    vaciarDespues.addEventListener("change", () => {
      guardarDatosCliente();
    });
  }
}

function bindCartEvents() {
  if (cartFab) cartFab.addEventListener("click", abrirCarrito);
  if (cartClose) cartClose.addEventListener("click", cerrarCarrito);
  if (overlay) overlay.addEventListener("click", cerrarCarrito);

  if (sendWaBtn) {
    sendWaBtn.addEventListener("click", (event) => {
      guardarDatosCliente();
      actualizarLinkWhatsApp();

      if (!carrito.length) {
        event.preventDefault();
        mostrarToast("Agregá al menos un producto");
        return;
      }

      const shouldClear = vaciarDespues ? vaciarDespues.checked : false;
      if (shouldClear) {
        event.preventDefault();
        window.open(sendWaBtn.href, "_blank", "noopener");
        setTimeout(() => {
          vaciarCarrito();
          cerrarCarrito();
        }, 250);
      }
    });
  }
}

function initCart() {
  cargarCarrito();
  cargarDatosCliente();
  bindClienteInputs();
  bindCartEvents();
  actualizarCarrito();
}

initCart();