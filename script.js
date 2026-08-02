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
  categories: ["Semua", "Beauty", "Health", "Home", "Food", "Gadget", "Fashion", "Automotif"],
  products: [
    { id: 1001, name: "Wangian Sri Maha Siam 10ml", category: "Beauty", platform: "tiktok", url: "https://vt.tiktok.com/ZS9ranxDJHRKt-XuSR9/", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/61d9537bafa44ab08212a6dac999015e~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1002, name: "ILLUSION by High Notes Fragrance", category: "Beauty", platform: "tiktok", url: "https://vt.tiktok.com/ZS9ra765w1BrA-iXVD9/", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/39ee856758f84957bc701fa584301842~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1003, name: "Five Doctors Collagen Peptide", category: "Health", platform: "tiktok", url: "https://vt.tiktok.com/ZS9ryHesNjaNv-9VVfs/", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/f9cd13ab93474fa0ad12f57e9a6d4df2~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1004, name: "MommyHana Combo Betul-Betul Bijak", category: "Health", platform: "tiktok", url: "https://vt.tiktok.com/ZS9ryH5Ty6Nw2-kNUTt/", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/bd6840f544ac456bae61572fc3f91b3d~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1005, name: "Minuman Arabic Gum Organik", category: "Food", platform: "tiktok", url: "https://vt.tiktok.com/ZS9ran3G6GfQb-TdMAk/", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/09673b5af94e48b8901d00edf7028356~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1006, name: "Puteh Edition Luxe 1kg", category: "Food", platform: "tiktok", url: "https://vt.tiktok.com/ZS9raWMtrdmkw-p8Yui/", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/f9e53fe1b81c4f51a88192d9a2ff5e80~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1007, name: "Eeventus Hair Cream", category: "Beauty", platform: "tiktok", url: "https://vt.tiktok.com/ZS9ryufdUd1s5-pFqvV/", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/e9a0883cc33e4c2bb89f1ae00b44373c~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1008, name: "AYBeauty Ay Toq", category: "Beauty", platform: "tiktok", url: "https://vt.tiktok.com/ZS9raXgQHA27g-V7WgU/", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/dda7cebc8b2e4c84a3516a93575c1716~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1009, name: "SwissThomas Cordless Vacuum Cleaner", category: "Home", platform: "tiktok", url: "https://vt.tiktok.com/ZS9rATSBGhRCu-SN8YF/", image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/d6c7eb74e799405e9bc1cda40ce5438b~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1010, name: "Szindore Air Freshener Breeze Edition", category: "Home", platform: "tiktok", url: "https://vt.tiktok.com/ZS9raVByrGrhV-MMKuf/", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/1e440b5c5063470498bdfd0864bf6171~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1011, name: "Soft99 Glaco Roll-On Rain Repellant", category: "Automotif", platform: "tiktok", url: "https://vt.tiktok.com/ZS9rMuqcPLXbn-xKOY9/", image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/0b834cecf71a4ddeb3b5a457211ddbf1~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1012, name: "Kathwi Wangian Kereta 120ml", category: "Automotif", platform: "tiktok", url: "https://vt.tiktok.com/ZS9raVUK8D4kH-15AYe/", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/d427300fa1334500923f3a281730ae45~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1013, name: "Payung Automatik UPF50", category: "Fashion", platform: "tiktok", url: "https://vt.tiktok.com/ZS9rMuRq2T7q4-82SvM/", image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e9b2c7722fc947758081f12924123a27~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1014, name: "Raineday Baju Hujan Split Set", category: "Fashion", platform: "tiktok", url: "https://vt.tiktok.com/ZS9rMuroyTFf7-aS5p7/", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/9f15b90ce3e048de90dbec3aa44acae3~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 1015, name: "Power Bank 60000mAh", category: "Gadget", platform: "tiktok", url: "https://vt.tiktok.com/ZS9rAT4S3eNbo-CaCbm/", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/9c03e9e3f2224c52ad03ee23382f2a86~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=2408c917&shcp=32ce9e9e&idc=my&from=604555543" },
    { id: 2001, name: "Set Penjagaan Kulit Harian", category: "Beauty", platform: "shopee", url: "https://example.com/shopee-skincare" },
    { id: 2002, name: "Botol Air Termal", category: "Health", platform: "shopee", url: "https://example.com/shopee-botol" },
    { id: 2003, name: "Rak Penyimpanan Serbaguna", category: "Home", platform: "shopee", url: "https://example.com/shopee-rak" },
    { id: 2004, name: "Kopi Segera Premium", category: "Food", platform: "shopee", url: "https://example.com/shopee-kopi" },
    { id: 2005, name: "Lampu Meja LED", category: "Gadget", platform: "shopee", url: "https://example.com/shopee-lampu" },
  ],
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
