// function declaration
function jumlahDuaBilangan(a, b) {
    var total;
    total = a + b;

    return total;
}

// function expression
var jumlahDuaBilangan = function(a, b) {
    var total;
    total = a + b;
    
    return total;
}

// memanggil / menjalankan function
alert(jumlahDuaBilangan(1,2));
alert(jumlahDuaBilangan(25,30));
alert(jumlahDuaBilangan(1500,17.5));