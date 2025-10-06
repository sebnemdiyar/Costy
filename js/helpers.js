// LocalStorage'a kayıt yapacak fonksiyon
const saveToLocale = (key, data) => {
  // Dışarıdan verilen key değerine karşılık yine dışarıdan verilen data değerini JSON.stringify ile dönüştürüp kayıt et
  localStorage.setItem(key, JSON.stringify(data));
};

// LocaleStorage'dan kayıtlı verileri alacak fonksiyon
const getFromLocale = (key) => {
  // Dışarıdan verilen key değerine sahip elemanı localStorage içerisinde bul,JSON.parse ile Js'de kullanılacak formata çevir ve return et.Ama belirtilen key değerine sahip eleman localeStorage'da yoksa bu noktada boş bir dizi return et
  return JSON.parse(localStorage.getItem(key)) || [];
};

// Sepetteki toplam ürün miktarını hesaplayan fonksiyon
const calculateTotalQuantity = (cart) => {
  // * bu fonksiyondan beklentimiz sepetteki toplam ürün miktarını hesaplamasıdır.

  // ! reduce: Bir dizinin her bir elemanını bir işleme tabi tutup, total bir sonuç elde etmek için kullanılır.Ör: sepetteki tüm ürünlerin miktarını toplayıp bir sepet toplam değeri elde et

  // Bu noktada reduce metodunun nasıl kullanılacağını öğrenelim.

  // reduce metodu diziAdı.reduce(function,initialValue) şeklinde kullanılır.Buradaki function initialValue üzerine ekleme yaparal toplam bir değer bulacaktır.

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // ? reduce metodu nasıl çalıştı ?

  // reduce metoduna verilen (total,item)=>total+ item.quantity kısmındaki total reduce'un aldığı initialValue'ya eşittir.Sepetteki her bir elemanın miktarını bu değerin üzerine ekleyerek toplam ürün miktarını hesaplar.

  // Hesaplanan toplam ürün miktarını fonksiyon dışarısına çıkar
  return totalQuantity;
};

// Sepetteki ürünlerin toplam fiyatını hesaplayacak fonksiyon
const calculateTotalPrice = (cart) => {
  // Bu fonksiyondan beklentimiz sepetteki tüm ürünlerin toplam fiyatını hesaplaması ve eğer toplam fiyat 500$ altında ise 100$'lık kargo ücreti alsın ama 500$'ın üzerinde ise kargo ücreti almasın.

  // sepetteki tüm ürünlerin toplam fiyatını hesapla
  const cartItemsAmount = cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  // Sepet toplamı için bir değişken oluştur
  let totalAmount;

  // Eğer sepetteki ürünlerin toplam fiyatı 500$'ın altındaysa 100$ kargo ücreti al;değilse kargo ücreti alma
  if (cartItemsAmount < 500) {
    // Kargo ücreti ekle
    totalAmount = cartItemsAmount + 100;
  } else {
    // Kargo ücreti ekleme
    totalAmount = cartItemsAmount;
  }

  // Hesaplanan toplam fiyatı return et
  return totalAmount;
};

export {
  saveToLocale,
  getFromLocale,
  calculateTotalQuantity,
  calculateTotalPrice,
};
