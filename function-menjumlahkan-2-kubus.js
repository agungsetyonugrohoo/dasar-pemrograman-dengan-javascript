// membuat sebuah fungsi untuk menjumlahkan dua volume kubus dimana panjang sisi kubus pertama adalah a dan panjang sisi kubus kedua adalah b
alert('Function Jumlah Volume Dua Kubus');
sisi_kubus_a = parseInt(prompt("masukkan panjang sisi kubus pertama:"));
sisi_kubus_b = parseInt(prompt("masukkan panjang sisi kubus kedua:"))

function jumlahVolumeDuaKubus(a, b) {
    var volumeKubus_a;
    var volumeKubus_b;
    var jmlTotalVolume;

    volumeKubus_a = a * a * a;
    volumeKubus_b = b * b * b;

    jmlTotalVolume = volumeKubus_a + volumeKubus_b;

    return jmlTotalVolume;
}

alert("hasil jumlah volume dua buah kubus adalah " + jumlahVolumeDuaKubus(sisi_kubus_a, sisi_kubus_b));