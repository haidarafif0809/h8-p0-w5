function totalDigitRekursif(angka) {
  // you can only write your code here!
  if(angka.length === 0){
     return 0;   
   } else {
     var angka = String(angka);
     var sisa = angka.slice(1);
     var hasil =  Number(angka[0]) + totalDigitRekursif(sisa);
     return hasil;   
   }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
