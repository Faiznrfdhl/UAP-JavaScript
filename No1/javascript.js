function hitungTotal() {
    var namaBarang = document.getElementById("namaBarang").value;
    var harga = parseFloat(document.getElementById("harga").value);
    var jumlah = parseInt(document.getElementById("jumlah").value);
    var diskon = parseFloat(document.getElementById("diskon").value);

    var total = harga * jumlah;
    var bayar = total - (total * diskon / 100);

    document.getElementById("total").value = total;
    document.getElementById("bayar").value = bayar;
    }

function resetForm() {
    document.getElementById("namaBarang").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("jumlah").value = "";
    document.getElementById("total").value = "";
    document.getElementById("diskon").value = "";
    document.getElementById("bayar").value = "";
    }