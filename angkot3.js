// latihan 3: menampilkan hal yang sama seperti latihan 2 akan tetapi hanya menggunakan 1 buah for dengan adanya pengkondisian
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroperasi) {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
    }
}