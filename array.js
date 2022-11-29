/*
array : susunan sistematis dari objek-objek yang serupa
array (ilkom) = tipe data yang digunakan untuk mendeskripsikan kumpulan elemen (nilai atau variabel), yang tiap-tiap elemennya memiliki index
array = sebuah variabel yang lebih sakti karena bisa menampung lebih dari satu nilai
deklarasi array : var arr = [ element1, element2, elementN, ... ];

Kenapa Array?
- mempermudah pengelolaan nilai / value / data dalam hal penelusuran dan pencarian
- manajemen memori

karakteristik array
- variabel jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama
- kumpulan pasangan key dan nilai / key and value pair
- key adalah index pada array dengan tipe integer yang dimulai dari 0
- Array pada javascript bertipe object
- array pada javascript memiliki fungsi / method length untuk menghitung jumlah elemen di dalamnya
- elemen pada array boleh memiliki tipe data yang berbeda

key and value pair - membuat array
var binatang = ['Kucing', 'Kelinci', 'Monyet', 'Panda', 'Koala', 'Sapi'];

atau

var binatang = [];
binatang = ['Kucing', 'Kelinci', 'Monyet', 'Panda', 'Koala', 'Sapi'];

console.log(binatang[4]); => menampilkan isi dari array dengan indeks 4

console.log(typeof(binatang)); => menampilkan tipe data dari variable binatang

console.log(binatang.length) => (method: length) menampilkan panjang dari variabel binatang

Elemen pada array boleh beda tipe
var myArr = ['teks',2,false];

var myFunc = function() {
    alert('Hello World!);
}

var myArr2 = ['teks',2,false,myFunc];

menyimpan array di dalam array
var myArr3 = ['teks',2,false,myFunc, [4,5,6]]; // array multidimensi dimana terdapat variabel array di dalam array

Array di dalam Array - array multidimensi / array bersarang
var myArr3 = ['teks',2,false,myFunc, [4,5,6]];
console.log(myArr[4][1]); // menampilkan angka 5 di console pada myArray3
*/ 

// manipulasi array

/* 
Hal yang akan dilakukan dalam manipulasi array:
- menambah elemen pada array
- menghapus elemen pada array
- menampilkan seluruh isi array
*/

// 1. menambah isi array
// var arr = [];
// arr[0] = "Sandhika";
// arr[1] = "Galih";
// arr[2] = "Nofa";
// arr[6] = "Doddy"; // akan menghasilkan 3 buah elemen undefined karena tidak adanya elemen pada nomor 3,4,5

// console.log(arr);

// 2. menghapus isi array
// var arr = ["Sandhika", "Galih", "Nofa", "Doddy"];
// arr[1] = undefined;
// console.log(arr);

// 3. menampilkan isi array
// var arr = ["Sandhika", "Galih", "Nofa", "Doddy"];
// for(var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr[i]);
// }

/* 
array Method :
- length = untuk mengetahui berapa jumlah elemen pada array
- join = untuk menggabungkan seluruh isi array dan mengubahnya menjadi sebuah string
- push = untuk menambahkan elemen pada array di akhir arraynya
- pop = untuk menghapus elemen terakhir pada array
- shift = untuk menghapus elemen di awal array
- unshift = untuk menambahkan elemen baru di awal array
- slice = untuk mengambil beberapa bagian pada array untuk menjadi array yang baru
- splice = untuk menyisipkan suatu elemen di posisi tertentu
- foreach = untuk melakukan looping pada array per elemennya
- map = untuk melakukan looping pada array dengan mengembalikkan array
- sort = untuk mengurutkan isi / elemen dari sebuah array
- filter = untuk mencari elemen pada array dapat mengembalikan banyak nilai dalam bentuk array
- find = untuk mencari elemen pada array dengan mengembalikan satu nilai
*/

// method pada array

// var arr = ["Sandhika", "Galih", "Nofa"];

// 1. join
// console.log(arr.join(' - ')); // menggabungkan elemen array menjadi string dan memisahkan tiap elemennya dengan ' - '

// 2. push & pop
// arr.push('Doddy', 'Fitri'); // nambah elemen di akhir array
// arr.pop(); // hapus elemen di akhir array
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Doddy'); // menambahkan elemen di awal array
// arr.shift(); // menghapus elemen di awal array
// console.log(arr.join(' - '));

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, elemenBaruN..)
// arr.splice(2, 0, 'Doddy', 'Fitri'); // menyisipkan elemen baru dari indeks kedua tanpa harus menghapus elemen lainnya sebanyak 1 elemen yang berisi 'Doddy'
// arr.splice(1,2, 'Doddy', 'Fitri'); // menghapus elemen dari indeks kedua sebanyak 2 elemen dan menambahkan elemen baru sebanyak 2 elemen yaitu 'Doddy' dan 'Fitri'
// console.log(arr.join(' - '));

// 5. Slice
// slice(indeksAwal, indeksAkhir);
// var arr = ["Sandhika", "Galih", "Nofa", "Doddy", "Fitri"];
// var arr2 = arr.slice(1,3); // membuat array baru dengan mengiris elemen dari indeks 1 hingga indeks 3
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ["Sandhika", "Galih", "Nofa"];
// for(var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function(e) {
//     console.log(e);
// }); // melakukan perulangan dengan memanfaatkan method array yang dicetak melalui function expression dengan variable e menunjukkan elemen dari array

// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// }) // mencetak elemen pada array beserta indeksnya dengan variable e adalah elemennya dan i adalah indeksnya

// 7. map
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// }); // membuat array baru yaitu angka2 yang berisikan setiap elemen array angka yang dikalikan 2
// console.log(angka2.join(' - '));

// 8. sort
// var angka = [1,10,2,20,5,3,6,8,4];
// angka.sort(function(a,b) {
//     return a - b;
// }); // untuk mengurutkan angka dari yang terkecil hingga terbesar
// console.log(angka.join(' - '));

// 9. filter
var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.filter(function(x) {
    return x > 5;
}); // mencari angka yang lebih besar dari 5 dan mengembalikkannya menjadi dalam bentuk array
console.log(angka2.join(' - '));

var angka3 = angka.find(function(x) {
    return x > 5;
}); // mengembalikkan satu nilai saja yang dimana nilainya lebih besar dari 5
console.log(angka3);




