var hari = ["Senin", "Selasa", "Rabu"];
console.log(hari.length);

var mhs =  [];
mhs = ['sandhika', 'galih', 'yudha'];   
console.log(typeof(mhs));

var myArr = [];
myArr = ['teks', 2, false];

var myFunc = function() {
    alert('halo');
}
var myArr2 = ['teks', 2, false, myFunc];
var myArr3 = ['teks', 2, false, myFunc,['a', 'b', 'c']];
console.log(myArr3[4][2]);

//manipulasi array
var arr  = ['a', 1, true];
arr[2] = false;
arr[3] = 'galih';
console.log(arr[1]);

//menghapus array
// var ary = ['a', 1, true];
// ary[2] = undefined;
// console.log(ary);


//menampilkan array
var ary = ['a', 1, true];
 for (var i = 0; i < 3; i++) {
    console.log('mahasiswa ke-' + (i+1) + ':' + ary[i]);
 }

//method array
//1. join
var ary = ['a', 1, true];
console.log(ary.join('-'));

//2. push
var ary = ['a', 1, true];
ary.push('galih');
console.log(ary);

//3. pop
var ary = ['a', 1, true];
ary.pop();
console.log(ary);

//4. unshift
var ary = ['a', 1, true];
ary.unshift('galih');
console.log(ary);

//5. shift
var ary = ['a', 1, true];
ary.shift();
console.log(ary);

//6. splice
var ary = ['a', 1, true];
ary.splice(1, 2, 'galih', 'fikri');
console.log(ary);

//7. slice
var ary = ['a', 1, true, 'galih', 'fikri'];
var ary2 = ary.slice(1, 3);
console.log(ary2.join('-'));

//8. foreach
var angka = [1, 2, 3, 4, 5];
// for(var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }
angka.forEach(function(e) {
    console.log(e);
})

//9. map
var angka = [1, 2, 3, 4, 5];
var angka2 = angka.map(function(e) {
    return e * 2;
})
console.log(angka2.join('-'));

//10. sort
// var angka = [1,3,2,4,5];
// angka.sort(function(a, b) {
//     return a - b;
// })
// console.log(angka.join('-'));   

//11. filter
var angka = [1, 2, 3, 4, 5];
var angka2 = angka.filter(function(e) {
    return e % 2 == 1;
})
console.log(angka2.join('-'));

//function