import{listProducts}from"./data-service.js?v=2";

const grid=document.querySelector("#product-grid");
const empty=document.querySelector("#empty-state");
const count=document.querySelector("#product-count");
const categories=document.querySelector("#category-rail");
const search=document.querySelector("#store-search");
let products=[];let platform="Semua";let category="Semua";

function escapeHtml(value=""){return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[char]);}
function platformMark(value){return value==="Shopee"?'<span class="platform-dot shopee">S</span>':'<span class="platform-dot tiktok">♪</span>';}
function filtered(){const term=search.value.trim().toLowerCase();return products.filter(item=>(platform==="Semua"||item.platform===platform)&&(category==="Semua"||item.category===category)&&(!term||`${item.name} ${item.category}`.toLowerCase().includes(term)));}
function renderCategories(){const values=["Semua",...new Set(products.map(item=>item.category).filter(Boolean))];categories.innerHTML=values.map(value=>`<button class="${value===category?"active":""}" data-category="${escapeHtml(value)}">${escapeHtml(value)}</button>`).join("");categories.querySelectorAll("button").forEach(button=>button.onclick=()=>{category=button.dataset.category;renderCategories();renderProducts();});}
function renderProducts(){const items=filtered();count.textContent=`${items.length} barang`;grid.innerHTML=items.map(item=>`<article class="product-card"><div class="product-image">${item.image_url?`<img src="${escapeHtml(item.image_url)}" alt="${escapeHtml(item.name)}" loading="lazy" referrerpolicy="no-referrer">`:'<div class="fallback">▧</div>'}</div><div class="product-content"><div class="product-meta">${platformMark(item.platform)}<span>${escapeHtml(item.platform)} · ${escapeHtml(item.category)}</span></div><h3>${escapeHtml(item.name)}</h3><a class="product-link" href="${escapeHtml(item.affiliate_url)}" target="_blank" rel="nofollow sponsored noopener">Lihat barang&nbsp; ›</a></div></article>`).join("");grid.classList.toggle("hidden",!items.length);empty.classList.toggle("hidden",items.length>0);}
document.querySelectorAll("#platform-switch button").forEach(button=>button.onclick=()=>{platform=button.dataset.platform;document.querySelectorAll("#platform-switch button").forEach(item=>item.classList.toggle("active",item===button));renderProducts();});
search.oninput=renderProducts;
document.querySelector("#reset-search").onclick=()=>{search.value="";platform="Semua";category="Semua";document.querySelectorAll("#platform-switch button").forEach(button=>button.classList.toggle("active",button.dataset.platform==="Semua"));renderCategories();renderProducts();search.focus();};
async function load(){try{products=await listProducts();renderCategories();renderProducts();}catch(error){empty.classList.remove("hidden");empty.querySelector("h2").textContent="Showroom belum dapat dimuatkan";empty.querySelector("p").textContent=error.message;}}
load();
