(function () {
  const ADP = window.ADP || {};

  ADP.money = function money(value) {
    if (value === null || value === undefined || value === "") {
      return "Consultar";
    }

    const numericValue = Number(value);
    if (Number.isNaN(numericValue)) {
      return "Consultar";
    }

    return numericValue.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0
    });
  };

  ADP.normalizeId = function normalizeId(value) {
    return Number(value);
  };

  ADP.placeholderImageSvg = function placeholderImageSvg(label = "Producto") {
    const safeLabel = String(label)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;");

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
        <rect width="400" height="300" fill="#1C1917"/>
        <rect x="22" y="22" width="356" height="256" rx="18" fill="none" stroke="#D4A227" stroke-width="4"/>
        <circle cx="200" cy="120" r="54" fill="#262220"/>
        <path d="M176 118c8-18 25-30 47-30 25 0 44 18 47 41-10-7-21-10-33-10-16 0-31 6-45 17-9 8-17 18-23 28-10-13-9-35 7-46zm7 53c7-9 16-17 29-21 14-4 28-2 40 6 13 8 22 22 24 38-40 13-78 12-93-23z" fill="#D4A227"/>
        <text x="200" y="224" text-anchor="middle" fill="#F5EFE6" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700">${safeLabel}</text>
      </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  window.ADP = ADP;
})();
