// LocaleStorage'a kayıt yapacak fonksiyon
const saveToLocale = (key, data)=>{

 // Dışarıdan verilen key değerine karşılık yine dışarıdan verilen data değerini JSON.stringify ile dönüştürüp kayıt et
    localStorage.setItem(key, JSON.stringify(data));
};


// LocaleStorage'dan kayıtlı verileri alacak fonksiyon

const getFromLocale = (key)=>{
  // Dışarıdan verilen key değerine sahip elemanı localStorage içerisinde bul,JSON.parse ile Js'de kullanılacak formata çevir ve return et.Ama belirtilen key değerine sahip eleman localeStorage'da yoksa bu noktada boş bir dizi return et  
  return JSON.parse(localStorage.getItem(key)) || [];
};

export {saveToLocale, getFromLocale};