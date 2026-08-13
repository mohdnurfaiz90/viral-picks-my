const config = window.VIRAL_PICKS_CONFIG || {};
const isConfigured = Boolean(config.supabaseUrl && config.supabaseAnonKey);
const demoKey = "viral-picks-manager-demo-v1";

const seedProducts = [
  {id:"demo-1",name:"Botol Air 2.0L Motivasi Masa",platform:"Shopee",category:"Rumah & Dapur",affiliate_url:"https://shopee.com.my/",image_url:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",active:true,position:1},
  {id:"demo-2",name:"Jam Meja LED Digital",platform:"TikTok Shop",category:"Elektronik",affiliate_url:"https://www.tiktok.com/",image_url:"https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=900&q=80",active:true,position:2},
  {id:"demo-3",name:"TWS Earbuds Pro",platform:"Shopee",category:"Elektronik",affiliate_url:"https://shopee.com.my/",image_url:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",active:true,position:3},
  {id:"demo-4",name:"Air Fryer Digital",platform:"TikTok Shop",category:"Rumah & Dapur",affiliate_url:"https://www.tiktok.com/",image_url:"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",active:true,position:4}
];

function demoRead(){
  try{return JSON.parse(localStorage.getItem(demoKey)) || seedProducts;}catch{return seedProducts;}
}
function demoWrite(items){localStorage.setItem(demoKey,JSON.stringify(items));}
function baseHeaders(token){return {apikey:config.supabaseAnonKey,Authorization:`Bearer ${token || config.supabaseAnonKey}`,"Content-Type":"application/json"};}
async function api(path,options={}){
  const response=await fetch(`${config.supabaseUrl}${path}`,{...options,headers:{...baseHeaders(options.token),...(options.headers||{})}});
  const data=await response.json().catch(()=>null);
  if(!response.ok)throw new Error(data?.message||data?.error_description||"Permintaan tidak berjaya");
  return data;
}

export const storageMode=isConfigured?"online":"demo";

export async function signIn(email,password){
  if(!isConfigured)return {demo:true,email:"Pratonton setempat"};
  return api("/auth/v1/token?grant_type=password",{method:"POST",body:JSON.stringify({email,password})});
}
export async function listProducts({includeHidden=false}={}){
  if(!isConfigured)return demoRead().filter(item=>includeHidden||item.active).sort((a,b)=>a.position-b.position);
  const filter=includeHidden?"":"&active=eq.true";
  return api(`/rest/v1/products?select=*&order=position.asc,created_at.desc${filter}`);
}
export async function saveProduct(product,token){
  if(!isConfigured){
    const items=demoRead();
    const index=items.findIndex(item=>item.id===product.id);
    const value={...product,id:product.id||crypto.randomUUID(),position:product.position||items.length+1,updated_at:new Date().toISOString()};
    if(index>=0)items[index]=value;else items.push(value);
    demoWrite(items);return value;
  }
  const value={name:product.name,platform:product.platform,category:product.category,affiliate_url:product.affiliate_url,image_url:product.image_url||null,active:product.active,position:product.position||999};
  if(product.id){
    const rows=await api(`/rest/v1/products?id=eq.${encodeURIComponent(product.id)}`,{method:"PATCH",token,headers:{Prefer:"return=representation"},body:JSON.stringify(value)});return rows[0];
  }
  const rows=await api("/rest/v1/products",{method:"POST",token,headers:{Prefer:"return=representation"},body:JSON.stringify(value)});return rows[0];
}
export async function deleteProduct(id,token){
  if(!isConfigured){demoWrite(demoRead().filter(item=>item.id!==id));return;}
  await api(`/rest/v1/products?id=eq.${encodeURIComponent(id)}`,{method:"DELETE",token,headers:{Prefer:"return=minimal"}});
}
async function optimizeImage(file){
  if(!file?.type?.startsWith("image/"))return file;
  const bitmap=await createImageBitmap(file);
  const maxEdge=1600;
  const scale=Math.min(1,maxEdge/Math.max(bitmap.width,bitmap.height));
  const width=Math.max(1,Math.round(bitmap.width*scale));
  const height=Math.max(1,Math.round(bitmap.height*scale));
  const canvas=document.createElement("canvas");
  canvas.width=width;canvas.height=height;
  canvas.getContext("2d",{alpha:false}).drawImage(bitmap,0,0,width,height);
  bitmap.close?.();
  const blob=await new Promise((resolve,reject)=>canvas.toBlob(value=>value?resolve(value):reject(new Error("Gambar gagal dikecilkan")),"image/webp",.82));
  return blob.size<file.size?blob:file;
}
export async function uploadProductImage(file,token){
  if(!file)return "";
  const uploadFile=await optimizeImage(file);
  if(!isConfigured)return await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(uploadFile);});
  const extension=uploadFile.type==="image/webp"?"webp":(file.name.split(".").pop()||"jpg").toLowerCase();
  const fileName=`${Date.now()}-${crypto.randomUUID()}.${extension}`;
  const response=await fetch(`${config.supabaseUrl}/storage/v1/object/product-images/${fileName}`,{method:"POST",headers:{apikey:config.supabaseAnonKey,Authorization:`Bearer ${token}`,"Content-Type":uploadFile.type,"x-upsert":"false"},body:uploadFile});
  if(!response.ok){const data=await response.json().catch(()=>({}));throw new Error(data.message||"Gambar gagal dimuat naik");}
  return `${config.supabaseUrl}/storage/v1/object/public/product-images/${fileName}`;
}
