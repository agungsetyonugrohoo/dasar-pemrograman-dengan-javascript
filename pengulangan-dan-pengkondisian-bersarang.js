var a = '';
for( var i = 0; i < 5; i++ ) {
    for( var j = 0; j <= i; j++) {
        a += '*';
    }
    a += '\n';
}
console.log(a);

console.log('\n\n');

var b = ''
for( var i = 5; i > 0; i--) {
    for( var j = 0; j < i; j++) {
        b += '*';
    }
    b += '\n';
}
console.log(b);

console.log('\n\n');

var c = '';
for(var i = 1; i <= 5; i++) {
    for(var j = i; j <= 5; j++) {
        c += ' ';
    }
    for(var k = 1; k <= i; k++ ) {
        c += '*';
    }
    for(var l = 1; l <= i - 1; l++) {
        c += '*';
    }
    c += '\n';
}
console.log(c);

console.log('\n\n');

var d = '';
for(var i = 5; i > 0; i--){
    for(var j = 5; j > 0; j--) {
        if(j > i) {
            d += ' ';
        } else {
            d += '*';
        }
    }
    d += '\n';
}
console.log(d);