function hitungGaji() {
    var namaPegawai = document.getElementById("namaPegawai").value;
    var jamKerja = parseFloat(document.getElementById("jamKerja").value);
    var upahPerJam = parseFloat(document.getElementById("upahPerJam").value);
    var anak = parseInt(document.getElementById("anak").value);
  
    var gaji = jamKerja * upahPerJam;
    var tunjAnak = anak * 0.1 * gaji;
    var totalGaji = gaji + tunjAnak;
  
    document.getElementById("gaji").value = gaji.toFixed(2);
    document.getElementById("tunjAnak").value = tunjAnak.toFixed(2);
    document.getElementById("totalGaji").value = totalGaji.toFixed(2);
  }