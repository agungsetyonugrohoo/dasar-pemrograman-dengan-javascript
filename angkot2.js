// latihan 2: menampilkan pesan angkot beroperasi sebanyak 6x (dari 1 sampai 6) gunakan while dan 
// tidak beroperasi sebanyak 4x (dari 7 sampai 10) gunakan for
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

// block while
while(noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    noAngkot++;
}

// block for
for(noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
}