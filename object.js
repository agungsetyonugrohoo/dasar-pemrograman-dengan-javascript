/* 
Object adalah kumpulan nilai, yang memiliki nama
Object adalah array, yang lebih sakti

"In javascript, object are king. If you understand object, you understand javascript"

Kenapa Object?
Karena object membuat javascript mengenali data-data yang telah diinputkan

Anatomi Object?
- Object dibentuk dengan tanda kurung kurawal {}
- variabel yang berada di dalam object disebut dengan properti
- properti bisa hanya ada satu atau lebih dan masing-masing properti dipisahkan dengan tanda koma
- function yang tersimpan di dalam object disebut dengan method
*/

// membuat object
var mhs = {
    nama : "Sandhika Galih",
    umur : 31,
    ips : [3.00, 2.50, 3.20],
    alamat : {
        jalan : "Jl. abc No. 123",
        kota : "Bandung",
        provinsi : "Jawa Barat"
    }
};

// cara mengakses properti dalam object
console.log(mhs.nama); // mengakses properti nama
console.log(mhs["nama"]); // mengakses properti nama dengan tanda kurung
console.log(mhs.ips); // mengakses properti array object dari ips
console.log(mhs.ips[2]); // mengakses properti array object dari ips pada elemen array ke 3
console.log(mhs.alamat); // mengakses object di dalam object
console.log(mhs.alamat.kota); // mengakses properti kota dalam object alamat di dalam object mhs
console.log(mhs["alamat"]["jalan"]); // mengakses properti jalan dalam object alamat di dalam object mhs dengan menggunakan kurung siku
console.log(mhs.alamat["provinsi"]); // mengakses properti provinsi dalam object alamat di dalam object mhs dengan menggunakan kurung siku dan titik (.)

/* 
Membuat Object pada Javascript
- Object Literal
- Function Declaration
- Constructor Function (keyword new)
- Object.create()
*/

// Object Literal
var mhs1 = {
    nama : "Sandhika Galih",
    nrp : "043040023",
    email : "sandahikagalih@unpas.ac.id",
    jurusan : "Teknik Informatika"
};

var mhs2 = {
    nama : "Doddy",
    nrp : "033040007",
    email : "doddy@gmail.com",
    jurusan : "Teknik Industri"
};

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Nofariza', '023040123', 'nofa@yahoo.com', 'Teknik Pangan');

// Constructor => Function yang khusus untuk membuat object
// penamaan Constructor seperti penamaan Class pada bahasa lain sehingga diawali dengan huruf besar
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('Erik', '013040321', 'erik@icloud.com', 'Teknik Mesin');

// this => sebuah keyword spesial yang secara otomatis didefinisikan pada setiap function
// console.log(this); // this ini sama dengan window hal ini dikarenakan context this merujuk pada global variabel yaitu window sehingga ...
// console.log(this === window); // apabila kita bandingkan antara this dengan window maka akan menghasilkan true

// var a = 10; // ini merupakan properti dalam sebuah window sehingga
// console.log(a); // apabila kita memanggilnya tidak perlu menggunakan variabel globalnya karena variabel global sudah bersifat global
// console.log(this.a); // akan tetapi karena variabel global itu sama dengan this maka bisa kita panggil dengan this
// console.log(window.a); // sama halnya ketika kita menggunakan variabel global

// meninjau context 'this' pada seluruh cara dalam membuat object

// membuat object

// cara 1 - function declaration
// function halo() {
//     console.log(this); // this ini masih merujuk pada variabel global window sehingga sebenarnya function halo ini berada dalam scope object window sehingga bisa juga difungsikan sebagai method terhadap object window, yang dimana pemanggilannya ...
//     console.log('halo');
// }
// halo(); // bisa seperti ini
// window.halo(); // bisa juga seperti ini
// this.halo(); // dan juga seperti ini karena this = window
// oleh karena itu dapat kita ketahui bahwa this mengembalikan object global

// cara 2 - object literal
// var obj = {a : 10, nama : 'Sandhika'};
// obj.halo = function() {
//     console.log(this); // menampilkan isi dari object yang bersangkutan atau dalam hal ini adalah variabel object dari obj
//     console.log('halo');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - constructor
function Halo() {
    console.log(this); // menampilkan object yang baru dibuat dimana ketika kita menggunakan keyword new dibuat sebuah object terhadap instance constructor Halo() ini sehingga terbuatlah object baru
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat
