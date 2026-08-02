/*
 * Ini satu-satunya bahagian yang perlu dikemas kini apabila mahu tambah produk.
 * Gantikan url contoh dengan affiliate link sebenar sebelum kongsi laman ini.
 */
const siteConfig = {
  name: "Viral Picks MY",
  profileImage: "assets/viral-picks-profile.png",
  welcome: "Selamat datang ke showroom Viral Picks MY. Cari barang viral, trending dan pilihan harian yang disusun mengikut kategori supaya lebih mudah untuk anda terokai.",
  platforms: [
    { id: "tiktok", name: "TikTok Shop", note: "Terokai produk pilihan dari TikTok Shop", icon: "tiktok" },
    { id: "shopee", name: "Shopee", note: "Terokai produk pilihan dari Shopee", icon: "store" },
  ],
  categories: ["Semua", ...new Set(window.showroomProducts.map((product) => product.category))],
  products: window.showroomProducts,
};

const icons = {
  tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 4c.6 2.4 2.15 3.9 4.5 4.2"/></svg>',
  store: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v10h16V10"/><path d="m3 10 2-6h14l2 6"/><path d="M8 10a4 4 0 0 0 8 0"/><path d="M9 20v-5h6v5"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>',
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
};

const app = document.getElementById("app");
let activePlatform = null;
let activeCategory = "Semua";

function platformName(id) {
  return siteConfig.platforms.find((platform) => platform.id === id).name;
}

function renderHome() {
  activePlatform = null;
  app.innerHTML = `
    <section class="home" aria-labelledby="site-title">
      <div class="home-card">
        <div class="avatar"><img src="${siteConfig.profileImage}" alt="Logo ${siteConfig.name}" /></div>
        <h1 id="site-title">${siteConfig.name}</h1>
        <p class="home-copy">${siteConfig.welcome} <strong>Pilih platform di bawah untuk mula melihat produk.</strong></p>
        <div class="platform-list" aria-label="Pilih platform">
          ${siteConfig.platforms.map((platform) => `
            <button class="platform-button" type="button" data-platform="${platform.id}">
              <span class="platform-icon">${icons[platform.icon]}</span>
              <span><span class="platform-label">${platform.name}</span><span class="platform-note">${platform.note}</span></span>
              <span class="chevron" aria-hidden="true">›</span>
            </button>`).join("")}
        </div>
        <p class="home-footer">&copy; ${new Date().getFullYear()} ${siteConfig.name}</p>
      </div>
    </section>`;
  document.querySelectorAll("[data-platform]").forEach((button) => button.addEventListener("click", () => renderCatalogue(button.dataset.platform)));
}

function renderCatalogue(platformId) {
  activePlatform = platformId;
  activeCategory = "Semua";
  const platform = siteConfig.platforms.find((item) => item.id === platformId);
  app.innerHTML = `
    <section class="catalogue" aria-label="Katalog ${platform.name}">
      <aside class="sidebar">
        <button class="back-button" type="button" id="back-home">${icons.back}<span>Kembali ke Showroom</span></button>
        <h2>Kategori</h2>
        <div class="category-list" id="category-list"></div>
      </aside>
      <section class="catalogue-main" aria-labelledby="catalogue-title">
        <header class="catalogue-heading">
          <h1 id="catalogue-title">${platform.name}</h1>
          <p>Cari produk pilihan yang disusun untuk memudahkan anda menemui barang viral dan trending dalam <strong>${platform.name}</strong>.</p>
        </header>
        <div class="search-block">
          <label for="product-search">Cari produk atau nombor</label>
          <div class="search-field"><span class="search-icon">${icons.search}</span><input id="product-search" type="search" placeholder="Contoh: serum atau 1001" autocomplete="off" /></div>
        </div>
        <p class="result-summary" id="result-summary" aria-live="polite"></p>
        <div class="table-wrap">
          <table>
            <thead><tr><th scope="col">No.</th><th scope="col">Produk</th><th scope="col">Kategori</th><th scope="col">Lihat</th></tr></thead>
            <tbody id="product-rows"></tbody>
          </table>
        </div>
        <aside class="help-note" aria-labelledby="help-title">
          <div class="help-icon" aria-hidden="true">i</div>
          <div><h2 id="help-title">Cara guna showroom</h2><p>Tulis nama produk atau nombor produk di ruangan carian. Anda juga boleh pilih kategori di sebelah kiri. Kemudian tekan <strong>Lihat produk</strong> untuk ke pautan produk.</p></div>
        </aside>
      </section>
    </section>`;
  document.getElementById("back-home").addEventListener("click", renderHome);
  document.getElementById("product-search").addEventListener("input", renderProducts);
  renderCategories();
  renderProducts();
}

function renderCategories() {
  const categoryList = document.getElementById("category-list");
  categoryList.innerHTML = siteConfig.categories.map((category) => `<button class="category-button" type="button" data-category="${category}" aria-pressed="${category === activeCategory}"><span class="category-icon">${category === "Semua" ? icons.store : "•"}</span><span>${category}</span></button>`).join("");
  categoryList.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => { activeCategory = button.dataset.category; renderCategories(); renderProducts(); }));
}

function renderProducts() {
  const query = document.getElementById("product-search").value.trim().toLocaleLowerCase("ms-MY");
  const productNumber = (product) => siteConfig.products.filter((item) => item.platform === product.platform).indexOf(product) + 1;
  const matches = siteConfig.products.filter((product) => product.platform === activePlatform && (activeCategory === "Semua" || product.category === activeCategory) && (`${productNumber(product)} ${product.name} ${product.category}`).toLocaleLowerCase("ms-MY").includes(query));
  document.getElementById("result-summary").textContent = `${matches.length} produk ditemui${activeCategory === "Semua" ? "" : ` dalam kategori ${activeCategory}`}.`;
  document.getElementById("product-rows").innerHTML = matches.length ? matches.map((product) => `<tr><td>${productNumber(product)}</td><td><div class="product-info"><img src="${product.image}" alt="" loading="lazy" /><span class="product-name">${product.name}</span></div></td><td>${product.category}</td><td><a class="view-product" href="${product.url}" target="_blank" rel="noopener noreferrer">Lihat produk</a></td></tr>`).join("") : '<tr><td class="empty-state" colspan="4">Tiada produk sepadan. Cuba kata kunci atau kategori lain.</td></tr>';
}

renderHome();
