// while(kondisi) { aksi }

// infinite loop atau looping forever
/* 
kondisi dimana pengulangan dilakukan secara terus menerus atau tanpa henti
cara menuliskannya
while(true) {
    aksi
}
hal ini menyebabkan kondisi akan terus mengeksekusi aksi dikarenakan perulangan terus menerus bernilai true
*/

// perulangan while yang dihentikan oleh user
/* 
cara menuliskannya
while(kondisi) {
    aksi
    prompt yang ditanyakan kepada user untuk menentukan perulangan
}
*/
// contoh
// var ulang = true;
// while(ulang) {
//     console.log('Hello World!');
//     ulang = confirm('lagi?');
// }

// perulangan yang dihentikan oleh program
/* 
cara menuliskannya
nilai awal
while(kondisi terminasi) {
    aksi
    increment (penambahan) / decrement (pengurangan) terhadap nilai awal
}
*/

// contoh
// var nilaiAwal = 1;
// while(nilaiAwal <= 5) {
//     console.log("Hello World!"); // aksi
//     nilaiAwal++ // increment
// } 

// latihan mencetak hello world 1x, hello world 2x ... hello world 100x
var nilaiAwal = 1;
while(nilaiAwal <= 1000) {
    console.log("Hello World! " + nilaiAwal + "x");
    nilaiAwal++;
}