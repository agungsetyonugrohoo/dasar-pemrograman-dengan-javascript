// scope (lingkup variable) ? bagaimana sebuah variabel dapat diakses dalam program

// jenis lingkup pemrograman
/* 
- block scope = variabel yang hanya berlaku di dalam block scope saja tidak bisa digunakan di luar scopenya => bahasa pemrograman C dan Java
- function scope = variabel yang hanya berlaku di dalam sebuah function saja sehingga tidak bisa digunakan diluar cakupan function
*/

// global scope atau window scope
var a = 1;

function tes() {
    // function scope
    var b = 2;
    // name conflict = memiliki dua buah nama variabel yang sama tetapi dalam scope yang berbeda sehingga global scope tidak akan menimpa atau ditimpa dari function scope
    var a = 2;
    a = 2; // variabel ini mengacu pada global scope
    console.log(a); // akses variable a dalam function scope
    console.log(window.a); // akses variabel a dalam global scope

    /* 
    Note :
    untuk membuat variabel lokal di dalam suatu fungsi pastikan menambahkan keyword var, let atau const didalam function tsb. akan tetapi jika ingin membuat variabel global di dalam suatu function tidak perlu keyword, langsung saja dan otomatis javascript akan membuatkannya secara global

    "use strict"; => berfungsi untuk membedakan function scope dengan global scope ketika global variabel ditentukan melalui function
    */
}

tes();