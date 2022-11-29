// refactoring adalah sebuah proses mengubah kode agar menjadi lebih 'baik' tanpa mengubah fungsionalitasnya

/*
alasan mengapa harus refactoring:
- readability = mudah dibaca
- DRY (Don't Repeat Yourself)
- Testability = mudah saat dilakukan pengujian
- Performance
- Maintainability
*/

// refactoring sederhana
function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;
}

alert(jumlahVolumeDuaKubus(8,3));