// pop up box alert
// alert('Hello World!');

// pop up box prompt
// var nama = prompt('masukkan nama');
// alert(nama);

// pop up box confirm
// var test = confirm('kamu yakin??');
// if( test === true ) {
//     alert('user menekan OK!');
// } else {
//     alert('user menekan CANCEL!');
// }

// latihan
alert("selamat datang..");
var lagi = true;
while( lagi ) {
    var nama = prompt("masukkan nama:");
    alert('halo ' + nama);

    lagi = confirm('coba lagi?');
}

alert('terimakasih..');
