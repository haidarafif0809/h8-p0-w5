function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  if(shoppers.length === 0){
    return [];
  }
  var listObjectBarang = [];
  for(var i = 0; i < listBarang.length; i++){
    var barang = { product: listBarang[i][0],
                   shoppers: [],
                   totalProfit: 0,
                   leftOver: listBarang[i][2]
                 };
     listObjectBarang.push(barang);

  }
  for(var i = 0; i < shoppers.length; i++){
    for(var j = 0; j < listBarang.length; j++){
      if(listBarang[j][0] === shoppers[i].product && listBarang[j][2] >= shoppers[i].amount){
        for(var k = 0; k < listObjectBarang.length; k++){
             if(shoppers[i].product === listObjectBarang[k].product){
               listObjectBarang[k].leftOver -= shoppers[i].amount;
               listObjectBarang[k].totalProfit += listBarang[j][1] * shoppers[i].amount;
               listObjectBarang[k].shoppers.push(shoppers[i].name);
               listBarang[j][2] -= shoppers[i].amount;

             } 
        }
        //end for list object barang
      }     
    }    
    //end for listBarang
  }
  //end for shoppers
  return listObjectBarang;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
