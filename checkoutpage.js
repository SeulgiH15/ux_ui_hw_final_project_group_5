function incrementValue(i) {
    var value = parseInt(document.getElementById('quantity' + i).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
        value++;
        document.getElementById('quantity' + i).value = value;
        var price = parseInt(document.getElementById('price' + i).value, 10);
        document.getElementById('subtoal' + i).value = value * price;

        var total = 0;
        for (var i = 1; i < 4; i++) {
            if (document.getElementById('subtoal' + i) != null)
                total = total + parseInt(document.getElementById('subtoal' + i).value);
        }
        document.getElementById('total').value = total;
    }
}
function decrementValue(i) {
    var value = parseInt(document.getElementById('quantity' + i).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 1) {
        value--;
        document.getElementById('quantity' + i).value = value;
        var price = parseInt(document.getElementById('price' + i).value, 10);
        document.getElementById('subtoal' + i).value = value * price;
        var total = 0;
        for (var i = 1; i < 4; i++) {
            if (document.getElementById('subtoal' + i) != null)
                total = total + parseInt(document.getElementById('subtoal' + i).value);
        }
        document.getElementById('total').value = total;
    }
}
function removeBox(i) {
    var total = parseInt(document.getElementById('total').value);
    var remove = parseInt(document.getElementById('subtoal' + i).value);
    document.getElementById('total').value = total - remove;
    document.getElementById('subtoal' + i).value = 0;
    document.getElementById('price' + i).value = 0;
}
function reset() {
    for (var i = 1; i < 4; i++) {
        document.getElementById('price' + i).value = 100 * i;
    }
    for (var i = 1; i < 4; i++) {
        document.getElementById('quantity' + i).value = 1;
        document.getElementById('subtoal' + i).value = parseInt(document.getElementById('price' + i).value, 10);
        document.getElementById('total').value = parseInt(document.getElementById('subtoal' + i).value, 10);
    }
    var total = 0;
    for (var i = 1; i < 4; i++) {
        total = total + parseInt(document.getElementById('subtoal' + i).value, 10);
    }
    document.getElementById('total').value = total;
}