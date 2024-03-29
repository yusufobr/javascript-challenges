//function main (arr){
//  const noBoom = "There is no 7 in the provided array";
//  const Boom = "Boom";

 // for (let i = 0; i < arr.length; i++) {
   // const arrayItemToString = String(arr[i]);
   // if (arrayItemToString.includes("7")) return Boom;
 // }
 // return noBoom;

//  const stringify = String(arr);
//  if (stringify.includes('7')) return Boom;
//  return noBoom;

//}


const main = array =>
  array.toString().includes('7') ? 'Boom' : 'There is no 7'

console.log(main([1,2,3,4,5,6,8,8,9, "hjljdkf dfkdh8dfh7 dfkdjfkd"]));
