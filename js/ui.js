//Ui elemanlarını bir arada tutan obje

const uiElements = {
  menuBtn: document.querySelector("#menu-btn"),
  nav: document.querySelector("nav"),
  productList: document.querySelector("#products-list"),
};

// Api'dan alınan ürünler için birer html render edecek fonksiyon
const renderProduct = (products, callBackFunction) => {
  // Bu fonksiyon ürünler dizi içerisindeki her bir eleman için bir html oluştur
  const productsHtml = products.map(
    (product) => `<div class="product">
         
          <img
            src="${product.image}"
            alt="${product.title}"
          />
        

          <div class="product-info">
            <h2>${product.title}</h2>

            <p>$${product.price.toFixed(2)}</p>

            <button class="add-to-cart" data-id="${product.id}">Add to cart</button>
          </div>
        </div>`
  ).join("");

  // Oluşturulan her bir html'i arayüzdeki productsList elemanının içerisine ekle
  uiElements.productList.innerHTML = productsHtml;

 // ! renderProduct fonksiyonu çalışana kadar arayüzde bir product elemanı bulunmayacak dolayısıyla bir sepete ekle butonuda bulunmayacak.Bu durumda eğer diğer ui elemanlarına erişmeye çalıştığımız gibi bu butonlara erişmeye çalışırsak bu noktada istediğimizi elde edemeyiz.Çözüm olaraksa bu butonlara erişme işlemini renderProduct fonksiyonu içerisinde yapacağız.
 // Sepete ekle butonlarına eriş
const addToCartButtons = document.querySelectorAll(".add-to-cart");
 
// Erişilen sepete ekle butonlarına bir addEventListener ekle.addEventListener tekil elemanlara ekleneceğinden ilk olarak addToCartButtons'ı dön ve içerisindeki her bir elemaan teker teker eriş
addToCartButtons.forEach((button)=>{
  button.addEventListener("click",callBackFunction) ; 
});
};

export { uiElements, renderProduct };
