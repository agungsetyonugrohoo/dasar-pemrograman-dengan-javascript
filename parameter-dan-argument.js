function tambah(a,b) {
    return a + b;
}

function kali(a,b) {
    return a * b;
}

var a = parseInt(prompt('masukkan nilai 1 :'));
var b = parseInt(prompt('masukkan nilai 2 :'));

// var hasil = tambah(a,b); // memasukkan argument dari user
// var hasil = tambah(a*2, b*2); // memasukkan argument dari expression
var hasil = kali(tambah(a,b), tambah(a,b)); // memasukkan argument dari function lain

console.log(hasil);

// jika parameter < argument, maka argument kelebihannya akan diabaikan
// jika parameter > argument, maka parameter kelebihannya akan di isi dengan nilai undefined (default value)

// arguments (pseudo-variable) atau variabel semu = array yang berisi nilai yang dikirimkan saat fungsi dipanggil

// contoh arguments
function tambahArguments() {
    var hasil = 0;
    for(var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambahArguments(1,2,3);
console.log(coba);