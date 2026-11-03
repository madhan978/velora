const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;
const raw = [
["Essential Heavyweight Tee","T-Shirts",899,1299,"Moss", "photo-1521572163474-6864f9cf17ab","New"],
["Oxford Button-Down Shirt","Shirts",1499,2199,"White","photo-1596755094514-f87e34085b2c","Bestseller"],
["Relaxed Straight Denim","Jeans",2199,2999,"Indigo","photo-1542272604-787c3835535d","Bestseller"],
["Tailored Smart Trousers","Trousers",1899,2599,"Charcoal","photo-1473966968600-fa801b869a1a","New"],
["Classic Polo Shirt","T-Shirts",1199,1699,"Navy","photo-1625910513413-5fc3b3a3c6b4",""],
["Linen Blend Resort Shirt","Shirts",1799,2499,"Sand","photo-1603252109303-2751441dd157","New"],
["Everyday Slim Jeans","Jeans",1999,2799,"Black","photo-151 pants",""],
["Minimal Zip Hoodie","Jackets",2299,3299,"Grey","photo-1556821840-3a63f95609a7",""],
["Textured Knit Polo","T-Shirts",1399,1999,"Cream","photo-1618354691373-d851c5c3a990",""],
["Modern Fit Formal Shirt","Shirts",1599,2299,"Blue","photo-1603252110481-7ba873bf42ab","Bestseller"],
["Utility Cargo Trousers","Trousers",1999,2799,"Olive","photo-151 pants",""],
["Weekend Overshirt","Shirts",1999,2899,"Brown","photo-1598033129183-c4f50c736f10","New"],
["Premium Crewneck Sweatshirt","Jackets",1899,2699,"Black","photo-1578681994506-b8f463449011",""],
["Relaxed Chino Pants","Trousers",1799,2499,"Beige","photo-1473966968600-fa801b869a1a",""],
["Graphic Back Print Tee","T-Shirts",999,1499,"Black","photo-1503342217505-b0a15ec3261c",""],
["Classic Denim Jacket","Jackets",2999,3999,"Blue","photo-1516257984-b1b4d707412e",""],
["Everyday Cotton Shirt","Shirts",1399,1999,"Sky","photo-1596755094514-f87e34085b2c",""],
["Tapered Fit Jeans","Jeans",2299,3199,"Mid Blue","photo-1542272604-787c3835535d",""],
["Performance Polo","T-Shirts",1299,1899,"Forest","photo-1625910513413-5fc3b3a3c6b4",""],
["Lightweight Bomber","Jackets",2799,3799,"Black","photo-1551028719-00167b16eac5",""],
["Linen Casual Trousers","Trousers",1899,2599,"Stone","photo-1473966968600-fa801b869a1a",""],
["Striped Resort Shirt","Shirts",1699,2399,"Blue","photo-1603252109303-2751441dd157",""],
["Vintage Wash Denim","Jeans",2399,3299,"Washed Blue","photo-1542272604-787c3835535d",""],
["Relaxed Fit Tee","T-Shirts",799,1199,"White","photo-1521572163474-6864f9cf17ab",""],
["Quilted Lightweight Vest","Jackets",2499,3499,"Olive","photo-1544923246-77307dd654cb",""],
["Pleated Formal Trousers","Trousers",2199,2999,"Black","photo-1473966968600-fa801b869a1a",""],
["Premium Flannel Shirt","Shirts",1899,2699,"Rust","photo-1598033129183-c4f50c736f10",""],
["Minimal Leather Belt","Accessories",899,1299,"Black","photo-1624222247344-550fb8c5e6e9",""],
["Everyday Canvas Sneakers","Footwear",2499,3499,"Off White","photo-1542291026-7eec264c27ff",""],
["Classic Cap","Accessories",699,999,"Black","photo-帽",""]
];
export const products = raw.map((p,i)=>({
 id:i+1, name:p[0], category:p[1], price:p[2], oldPrice:p[3], color:p[4],
 image: img(p[5].startsWith("photo-") && !p[5].includes(" ") ? p[5] : "photo-1521572163474-6864f9cf17ab"),
 tag:p[6], rating:(4.2+((i*7)%8)/10).toFixed(1), reviews:32+i*13,
 sizes:["S","M","L","XL","XXL"], description:"Designed for everyday versatility, this considered piece combines a comfortable feel with a clean, modern silhouette. Easy to style, made to wear on repeat.",
 fabric:"Premium cotton blend", fit:"Regular fit", care:"Machine wash cold. Wash with similar colours."
}));
export const categories = [
 {name:"T-Shirts", sub:"Everyday essentials", image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85"},
 {name:"Shirts", sub:"Smart, relaxed, refined", image:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=85"},
 {name:"Jeans", sub:"Your perfect fit", image:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85"},
 {name:"Trousers", sub:"Made to move", image:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=85"}
];
