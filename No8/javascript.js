function hitung() {
    var kategori = document.fform.ikategori.value;
    var lama = document.fform.ilama.value;
  
    var harga = 0;
    if (kategori == "ALAMANDA") {
      harga = 120000000;
    } else if (kategori == "MAWAR") {
      harga = 130000000;
    }
  
    var uangmuka = harga * 0.2;
    var sisa = harga - uangmuka;
    var angsuran = sisa / lama;
  
    var hasil = "<h2>Hasil Perhitungan</h2>" +
      "Type Rumah: " + kategori + "<br>" +
      "Harga Rumah: Rp. " + harga + "<br>" +
      "Uang Muka: Rp. " + uangmuka + "<br>" +
      "Sisa: Rp. " + sisa + "<br>" +
      "Lama Kredit: " + lama + " bulan<br>" +
      "Angsuran per Bulan: Rp. " + angsuran + "<br><br>" +
      "<table>" +
        "<tr>" +
          "<th>Bulan</th>" +
          "<th>Angsuran</th>" +
          "<th>Sisa</th>" +
        "</tr>";
    for (var i = 1; i <= lama; i++) {
      sisa -= angsuran;
      hasil += "<tr>" +
        "<td>" + i + "</td>" +
        "<td>Rp. " + angsuran + "</td>" +
        "<td>Rp. " + sisa + "</td>" +
      "</tr>";
    }
    hasil += "</table>";
    document.getElementById("hasil").innerHTML = hasil;
  }