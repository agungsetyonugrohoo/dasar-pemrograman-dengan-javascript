// rekursif = sebuah fungsi yang memanggil dirinya sendiri
// harus mengembalikan nilai
// base case = kondisi akhir dari rekursif yang menghasilkan nilai
// semua looping bisa dibuat rekursif, tapi tidak sebaliknya

// contoh
function tampilAngka(n) {
    if(n === 0) return; // base case
    console.log(n);
    return tampilAngka(n-1);
}

// faktorial
function faktorial(n) {
    if(n === 0) return 1;
    return n * faktorial(n-1);
}

/*
implementasi rekursif
- menggantikan looping
- fibonacci
- pencarian dan penelusuran pada struktur data list dan tree
- bahasa pemrograman yang tidak memiliki pengulangan (haskel, Erlang, prolog, dll)
- dll.
*/
