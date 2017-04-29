// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

//
// function addPromise (a, b) {
//   return new Promise(function (resolve, reject) {
//     if (typeof a === 'number' && typeof b === 'number' ) {
//       resolve(a+b);
//     }
//     else {
//       reject('Error');}
//   });
// }
// addPromise(2,1).then(function (summ){
//   console.log('Summ=', summ);
// }, function (err) {
//   console.log('error: ', err);
// })

var addStatement = (a,b) => a + b;
function add (a, b) {
  return a + b;
}

console.log(addStatement(1,3));
console.log(add(9,0));
