var tanya = true;
alert('tebak angka dari 1 - 10' + '\nkamu punya 3 kesempatan');
while(tanya) {
    const comp = Math.floor(Math.random() * 10);
    var hasil = '';

    let kesempatan = 3;
    while(kesempatan > 0) {
        let p = parseInt(prompt('masukkan angka tebakkan'));
        kesempatan--;

        if(p == comp) {
            hasil = 'anda benar' + '\nangka yang dicari adalah ' + comp; break;
            } else if(p < comp) {
                hasil = 'terlalu RENDAH!' + '\nayo masih ada kesempatan ' + kesempatan + ' lagi';
            } else if(p > comp) {
                hasil = 'terlalu TINGGI!' + '\nayo masih ada kesempatan ' + kesempatan + ' lagi';
            } else {
                hasil = 'kamu memasukkan angka yang salah!';
            }
            
        if(kesempatan == 0) {
            hasil = 'anda gagal\nangka yang dicari adalah ' + comp;
        }

        alert(hasil);
    }

    tanya = confirm('main lagi?');
}

alert('terimakasih sudah bermain!');