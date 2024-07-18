function proses() {
    let namaBarang = document.getElementById("namaBarang").value;
    let jumlah = parseInt(document.getElementById("jumlah").value);
    let status = document.getElementById("status").value;
    let harga = 0;

    switch (namaBarang) {
      case "Monitor":
        harga = 2000000;
        break;
    }

    let total = harga * jumlah;
    document.getElementById("harga").value = harga;
    document.getElementById("total").value = total;

    let diskon = 0;
    if (status === "Pelanggan") {
      diskon = total * 0.1;
    }
    document.getElementById("diskon").value = diskon;

    let bayar = total - diskon;
    document.getElementById("bayar").value = bayar;
  }