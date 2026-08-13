import { listProducts } from "./data-service.js?v=3";

const siteConfig = {
  name: "Viral Picks MY",
  profileImage: "https://mohdnurfaiz90.github.io/viral-picks-my/assets/viral-picks-profile.png",
  heroImage: "https://mohdnurfaiz90.github.io/viral-picks-my/exec-2e0d79d6-74f6-43ab-9cd1-deba06ced1c1.png",
  platforms: [
    { id: "tiktok", name: "TikTok Shop", icon: "tiktok" },
    { id: "shopee", name: "Shopee", icon: "shopee" },
  ],
  products: [],
};

const icons = {
  tiktok: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M29 8v22a8 8 0 1 1-8-8" fill="none" stroke="#25f4ee" stroke-width="7"/><path d="M29 8c1.2 6 5.2 10 11 10" fill="none" stroke="#fe2c55" stroke-width="7"/><path d="M28 8v22a8 8 0 1 1-8-8M28 8c1.2 6 5.2 10 11 10" fill="none" stroke="white" stroke-width="3.5" stroke-linecap="round"/></svg>',
  shopee: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 16h28l-2 25H12L10 16Z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M17 17v-3a7 7 0 0 1 14 0v3" fill="none" stroke="currentColor" stroke-width="3"/><path d="M29 23c-1-1-3-2-5-2-3 0-5 1-5 4 0 6 11 2 11 8 0 3-3 5-6 5-2 0-5-1-6-3" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>',
  bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
};

const app = document.getElementById("app");
let activePlatform = null;
let activeCategory = "Semua";

function platformProducts(platformId) {
  return siteConfig.products.filter((product) => product.platform === platformId);
}

function platformCategories(platformId) {
  return ["Semua", ...new Set(platformProducts(platformId).map((product) => product.category))];
}

function renderHome() {
  activePlatform = null;
  document.title = `${siteConfig.name} | Showroom`;
  app.innerHTML = `
    <section class="home" aria-labelledby="site-title">
      <span class="leaf leaf-left" aria-hidden="true"></span><span class="leaf leaf-right" aria-hidden="true"></span>
      <div class="home-main">
        <div class="hero-copy">
          <div class="profile-mark"><img src="${siteConfig.profileImage}" alt="Logo ${siteConfig.name}" /></div>
          <h1 class="brand-title" id="site-title"><span class="plain">Viral</span> <span class="gradient">Picks MY</span></h1>
          <span class="title-stroke" aria-hidden="true"></span>
          <p class="hero-lead">Cari barang viral kegemaran anda dengan lebih mudah.</p>
          <div class="platform-list" aria-label="Pilih platform beli-belah">
            ${siteConfig.platforms.map((platform) => `
              <button class="platform-button" type="button" data-platform="${platform.id}">
                <span class="platform-icon">${icons[platform.icon]}</span>
                <span><span class="platform-label">${platform.name}</span><span class="platform-note">Tekan untuk lihat semua pilihan</span></span>
                <span class="chevron" aria-hidden="true">›</span>
              </button>`).join("")}
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <span class="spark spark-a">✦</span><span class="spark spark-b">✦</span><span class="spark spark-c">✦</span>
          <img src="${siteConfig.heroImage}" alt="" />
        </div>
      </div>
      <section class="guide" aria-labelledby="guide-title">
        <h2 id="guide-title">Cara mudah cari barang viral</h2>
        <div class="guide-grid">
          <div class="guide-item"><span class="guide-icon">${icons.search}</span><strong>Cari</strong><p>Temui pelbagai barang viral dengan cepat.</p></div>
          <div class="guide-item"><span class="guide-icon">${icons.heart}</span><strong>Pilih</strong><p>Pilih barang kegemaran anda tanpa susah.</p></div>
          <div class="guide-item"><span class="guide-icon">${icons.bag}</span><strong>Beli</strong><p>Terus ke platform pilihan anda untuk beli.</p></div>
        </div>
      </section>
      <p class="home-footer">© ${new Date().getFullYear()} ${siteConfig.name} <span>·</span> <a href="manager.html">Manager</a></p>
    </section>`;
  document.querySelectorAll("[data-platform]").forEach((button) => button.addEventListener("click", () => renderCatalogue(button.dataset.platform)));
  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderCatalogue(platformId) {
  activePlatform = platformId;
  activeCategory = "Semua";
  const platform = siteConfig.platforms.find((item) => item.id === platformId);
  const total = platformProducts(platformId).length;
  document.title = `${platform.name} | ${siteConfig.name}`;
  app.innerHTML = `
    <section class="catalogue ${platformId === "shopee" ? "shopee-theme" : "tiktok-theme"}" aria-label="Katalog ${platform.name}">
      <header class="catalogue-top">
        <div class="mini-brand"><img src="${siteConfig.profileImage}" alt="" /><div><strong>${siteConfig.name}</strong><span>Showroom barang viral</span></div></div>
        <button class="back-button" type="button" id="back-home">${icons.back}<span>Kembali</span></button>
      </header>
      <div class="catalogue-body">
        <aside class="sidebar" aria-label="Kategori produk">
          <h2>Kategori</h2><div class="category-list" id="category-list"></div>
        </aside>
        <main class="catalogue-main">
          <header class="catalogue-heading">
            <div><p class="eyebrow">Showroom pilihan</p><h1><span>${platform.name}</span></h1><p>Cari ikut nama, nombor atau kategori. Kemudian tekan butang produk untuk melihatnya di ${platform.name}.</p></div>
            <div class="product-count" aria-label="${total} produk"><div><strong>${total}</strong><small>produk</small></div></div>
          </header>
          <div class="search-block">
            <label for="product-search">Apa yang anda sedang cari?</label>
            <div class="search-field"><span class="search-icon">${icons.search}</span><input id="product-search" type="search" placeholder="Tulis nama produk atau nombor…" autocomplete="off" /></div>
          </div>
          <p class="result-summary" id="result-summary" aria-live="polite"></p>
          <div class="table-wrap">
            <table class="product-table">
              <thead><tr><th>No.</th><th>Produk</th><th>Kategori</th><th>Pautan</th></tr></thead>
              <tbody id="product-rows"></tbody>
            </table>
          </div>
          <aside class="help-note" aria-labelledby="help-title"><div class="help-icon">i</div><div><h2 id="help-title">Cara guna showroom</h2><p>Tulis nama atau nombor di ruangan carian, atau pilih kategori. Tekan <strong>Lihat produk</strong> untuk membuka pautan rasmi dalam tab baharu.</p></div></aside>
        </main>
      </div>
    </section>`;
  document.getElementById("back-home").addEventListener("click", renderHome);
  document.getElementById("product-search").addEventListener("input", renderProducts);
  renderCategories();
  renderProducts();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderCategories() {
  const categoryList = document.getElementById("category-list");
  categoryList.innerHTML = platformCategories(activePlatform).map((category, index) => `
    <button class="category-button" type="button" data-category="${category}" aria-pressed="${category === activeCategory}">
      <span class="category-dot">${index === 0 ? "✦" : String(index).padStart(2, "0")}</span><span>${category}</span>
    </button>`).join("");
  categoryList.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    renderCategories();
    renderProducts();
  }));
}

function renderProducts() {
  const search = document.getElementById("product-search");
  const query = search.value.trim().toLocaleLowerCase("ms-MY");
  const all = platformProducts(activePlatform);
  const matches = all.filter((product, index) => {
    const haystack = `${index + 1} ${product.name} ${product.category} ${product.subcategory || ""}`.toLocaleLowerCase("ms-MY");
    return (activeCategory === "Semua" || product.category === activeCategory) && haystack.includes(query);
  });
  document.getElementById("result-summary").textContent = `${matches.length} produk ditemui${activeCategory === "Semua" ? "" : ` dalam ${activeCategory}`}.`;
  const rows = document.getElementById("product-rows");
  if (!matches.length) {
    const message = all.length ? "Cuba kata kunci atau kategori lain." : "Produk Shopee akan muncul di sini selepas pautan ditambah.";
    rows.innerHTML = `<tr><td class="empty-state" colspan="4"><strong>Belum ada produk dipaparkan</strong>${message}</td></tr>`;
    return;
  }
  rows.innerHTML = matches.map((product) => {
    const number = all.indexOf(product) + 1;
    return `<tr>
      <td><span class="number-chip">${number}</span></td>
      <td><div class="product-info"><div class="product-image">${product.image ? `<img src="${product.image}" alt="Gambar ${product.name}" loading="lazy" referrerpolicy="no-referrer" />` : `<span class="image-placeholder" aria-hidden="true">VP</span>`}</div><div><span class="product-name">${product.name}</span><span class="product-sub">${product.subcategory || product.category}</span></div></div></td>
      <td>${product.category}</td>
      <td><a class="view-product" href="${product.url}" target="_blank" rel="noopener noreferrer">Lihat produk ↗</a></td>
    </tr>`;
  }).join("");
}

async function startShowroom() {
  try {
    const products = await listProducts();
    siteConfig.products = products.map((product) => ({
      ...product,
      name: product.name.replace(/\s*Catatan:.*$/i, "").trim(),
      platform: product.platform === "TikTok Shop" ? "tiktok" : "shopee",
      url: product.affiliate_url,
      image: product.image_url || window.legacyProductImages?.[product.affiliate_url] || "",
    }));
    renderHome();
  } catch (error) {
    app.innerHTML = `<section class="load-error"><strong>Showroom belum dapat dibuka.</strong><p>${error.message}</p><button type="button" id="retry-load">Cuba semula</button></section>`;
    document.getElementById("retry-load").addEventListener("click", startShowroom);
  }
}

startShowroom();
