function kaliTerusRekursif(angka) {
  // you can only write your code here!
  if(angka.length === 1){
    return angka;    
  } else {
    var angka = String(angka);
    var hasilKali  = angka[0];
    for(var i = 1; i < angka.length; i++){
        hasilKali  = hasilKali  * angka[i]; 
    }
    return kaliTerusRekursif(hasilKali);
    
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
