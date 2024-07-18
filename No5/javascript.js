function calculateTotal() {
    var harga = parseFloat(document.getElementById('harga').value);
    var jumlah = parseInt(document.getElementById('jumlah').value);
    var total = harga * jumlah;

    var usbPrice = 50000;
    var memoryPrice = 120000;
    var speakerPrice = 40000;

    if (document.getElementById('usb').checked) {
        total += usbPrice;
    }
    if (document.getElementById('memory').checked) {
        total += memoryPrice;
    }
    if (document.getElementById('speaker').checked) {
        total += speakerPrice;
    }

    var pajak = total * 0.1;
    var bayar = total + pajak;

    document.getElementById('total').value = total;
    document.getElementById('pajak').value = pajak;
    document.getElementById('bayar').value = bayar;
}

function resetForm() {
    document.getElementById('salesForm').reset();
}