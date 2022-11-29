// latihan 4: melanjutkan latihan 3 akan tetapi pada angkot no 8 sudah bisa beroperasi sehingga harus lembur saat beroperasi agar mencapai target
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroperasi) {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    } else if(noAngkot == 8) {
        console.log("Angkot No. " + noAngkot + " sedang lembur.");
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
    }
}