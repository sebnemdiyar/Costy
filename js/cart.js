import { getFromLocale, saveToLocale } from "./helpers.js";


// LocaleStorage'dan sepete eklenen ürünleri al
let cart = getFromLocale("cart");



//Sepete ürün ekleyecek fonksiyon
const addToCart = (e, products) => {
  // Bu fonksiyondan beklentimiz ne? İlk olarak sepete eklemek istediğimiz ürünü tespit etsin sonrasında bu ürünün sepette olup olmadığını kontrol etsin.Eğer ürün sepette varsa o ürünün miktarını bir arttırsın eğer ürün sepete ilk defa eklenecekse ürünü sepete eklesin.Sepete eklenen ürünler sayfa yenilendiğinde kaybolmasın diye localStorage'da eklenen ürünleri tutsun.
  
   // Sepete eklenen ürünü tespi edebilmek için hangi elemana tıklandığını tespit et ve bu elemana eklenen id değerine eriş
 const productId = +e.target.dataset.id;
  
   // products dizisi içerisinde id'si productId'ye eşit olan elemanı bul
const foundedProduct = products.find((product) => product.id === productId);

// Sepete eklenecek ürün öncesinde sepete eklendi mi? Eğer ürün öncesinde sepete eklendiyse yeniden ekleme sadece miktarını bir arttır.Ama ürün öncesinde sepete eklenmediyse bu ürünün verileri üzerine quantity değeri ekleyerek sıfırdan sepete ekleme işlemi yap.

const exitingProduct = cart.find((item)=>item.id===productId);

console.log(exitingProduct);

if(exitingProduct){
  // Eğer sepete eklenecek ürün önceden eklendiyse miktarını bir arttır
  exitingProduct.quantity++
}
else{
  // Eğer sepete eklenecek ürün önceden eklenmediyse sepete eklenecek ürün için bir ürün objesi oluştur
const cartItem ={
  //      id: foundedProduct.id,
      //   title: foundedProduct.title,
      //   price: foundedProduct.price,
      //   image: foundedProduct.image,
  ...foundedProduct,
  quantity: 1,
};

 // Sepete eklenecek olan ürünü cart dizisine ekle
cart.push(cartItem);
}

// Sepet dizisini localeStorage'a kayıt et
saveToLocale("cart", cart);

  // Sepete ekle butonunun içeriğini "Added" olarak güncelle
  e.target.textContent="Added";

  // 2s sonra sepete ekle butonun içeriğini "Add to cart" olarak güncelle
  setTimeout(()=>{
    e.target.textContent="Add to cart";
  }, 2000);
};

export { addToCart };
