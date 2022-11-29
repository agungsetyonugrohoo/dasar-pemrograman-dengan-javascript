tanya = true;
while(tanya) {
    // menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');
    console.log("user memilih " + p);

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();
    // console.log(comp); // fungsi math.random untuk mengenerate bilangan diantara 0 hingga 1 secara random
    if(comp < 0.34) {
        comp = 'gajah';
    } else if(comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    console.log("komputer memilih " + comp); // untuk menunjukkan bahwa comp sudah memilih gajah, orang atau semut

    // menentukan rules
    var hasil = '';
    if(p == comp) {
        hasil = 'SERI';
    } else if(p == 'gajah') {
        // if(comp == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH';
        // }
        // menggunakan ternary operator
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH';
    } else if(p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG!';
    } else if(p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG!';
    } else {
        hasil = 'Memasukkan pilihan yang salah';
    }

    // tampilkan hasil
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    // konfirmasi main lagi?
    tanya = confirm('lagi?');
}

alert('terimakasih sudah bermain!');
