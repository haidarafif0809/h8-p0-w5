function changeMe(arr) {
  // you can only write your code here!
  for(var i = 0; i < arr.length; i++){
    console.log(i+ 1 + '. ' + arr[i][0] + ' ' + arr[i][1] + ':');    
    if(arr[i][3] ===  undefined){
       var age = 'Invalid Birth Year';
    } else {
       var age = 2018 - arr[i][3];
    }
    var person = { firstName: arr[i][0], lastName: arr[i][1], gender: arr[i][2], age: age};
    console.log(person);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
