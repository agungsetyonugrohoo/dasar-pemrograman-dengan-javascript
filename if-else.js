/* 
Sintaks if-else
if(kondisi) {
    aksi 1
} else {
    aksi 2
}
...
*/

// contoh
var angka = prompt('masukkan angka:');
if(angka === 1) {
    alert('anda memasukkan angka 1');
}

if(angka < 5) {
    alert(angka + ' lebih kecil dari 5');
}

if(angka % 2 == 0) {
    alert(angka + ' adalah bilangan GENAP');
} else {
    alert(angka + ' adalah bilangan GANJIL');
}