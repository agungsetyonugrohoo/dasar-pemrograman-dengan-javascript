// function declaration vs function expression

/* 
Function Declaration
- function identifier (ParameterList 'opt') { FunctionBody }
- Lebih Fleksibel (dapat ditulis dimanapun) karena javascript terdapat konsep Hoisting dimana deklarasi function pasti disimpan terlebih dahulu dalam memori
- Mudah dipahami pemula

Function Expression
- function identifier 'opt' (ParameterList opt) { FunctionBody }
- harus didefinisikan terlebih dahulu sebelum dipanggil
- lebih powerfull karena bisa sebagai closure, argument untuk function lain, IIFE (Immediately Invoked Function Expression)
*/

// contoh function declaration
// function tampilPesan(nama) {
//     alert('halo ' + nama);
// }

// contoh function expression
var tampilPesan = function (nama) { alert('halo ' + nama); }

tampilPesan('Agung Setyo Nugroho');