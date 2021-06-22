var selected
var a11, a12, a13, a21, a22, a23, a31, a32, a33

function onSelect(valor) {
    selected = valor
}

function getValor(value) {
    document.getElementById(selected).value += value
}

function calcular() {

    let valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9

    a11 = document.getElementById('valor1').value
    a12 = document.getElementById('valor2').value
    a13 = document.getElementById('valor3').value
    a21 = document.getElementById('valor4').value
    a22 = document.getElementById('valor5').value
    a23 = document.getElementById('valor6').value
    a31 = document.getElementById('valor7').value
    a32 = document.getElementById('valor8').value
    a33 = document.getElementById('valor9').value

    document.getElementById('res1').value = a11
    document.getElementById('res2').value = a12
    document.getElementById('res3').value = a13
    document.getElementById('res4').value = a11
    document.getElementById('res5').value = a12
    document.getElementById('res11').value = a21
    document.getElementById('res12').value = a22
    document.getElementById('res13').value = a23
    document.getElementById('res14').value = a21
    document.getElementById('res15').value = a22
    document.getElementById('res21').value = a31
    document.getElementById('res22').value = a32
    document.getElementById('res23').value = a33
    document.getElementById('res24').value = a31
    document.getElementById('res25').value = a32

    document.getElementById('res31').value = a11 + '.' + a22 + '.' + a33 +
        ' + ' + a12 + '.' + a23 + '.' + a31 +
        ' + ' + a13 + '.' + a21 + '.' + a32 +
        ' - ' + a31 + '.' + a22 + '.' + a13 +
        ' - ' + a32 + '.' + a23 + '.' + a11 +
        ' - ' + a33 + '.' + a21 + '.' + a12

    valor1 = a11 * a22 * a33
    valor2 = a12 * a23 * a31
    valor3 = a13 * a21 * a32

    valor4 = a31 * a22 * a13
    valor5 = a32 * a23 * a11
    valor6 = a33 * a21 * a12

    valor7 = valor1 + valor2 + valor3
    valor8 = valor4 + valor5 + valor6
    valor9 = valor7 - valor8

    document.getElementById('res41').value = valor1 + '+' + valor2 + '+' + valor3 +
        ' - ' + valor4 + '-' + valor5 + '-' + valor6

    document.getElementById('res51').value = valor7 + '-' + valor8
    document.getElementById('res61').value = valor9
}