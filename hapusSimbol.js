function hapusSimbol(str) {
  // you can only write your code here!
    var onlyLetterAndNumber =  str.match(/[0-9a-z]+/gi);
    if(onlyLetterAndNumber){
        var strHasil = '';
        for(var i = 0; i < onlyLetterAndNumber.length; i++){
            strHasil += onlyLetterAndNumber[i];
        }
        return strHasil;
    } else {
       return '';
    }
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
