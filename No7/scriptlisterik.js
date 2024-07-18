function hitungTagihan() {
    const namaPelanggan = document.getElementById("namaPelanggan").value;
    const kategori = document.getElementById("kategori").value;
    const jumlahPemakaian = parseInt(document.getElementById("jumlahPemakaian").value);

    const dataTagihan = {
        "Sosial": { abodemen: 10000, tarifPerKWH: 300, pajak: 0 },
        "Rumah": { abodemen: 30000, tarifPerKWH: 500, pajak: 10 },
        "Industri": { abodemen: 50000, tarifPerKWH: 1000, pajak: 30 }
    };

    if (isNaN(jumlahPemakaian) || jumlahPemakaian <= 0) {
        alert("Masukkan jumlah pemakaian listrik yang valid.");
        return;
    }

    const tagihan = dataTagihan[kategori];
    let subtotal = 0;
    let rincianHTML = "";

    for (let i = 1; i <= jumlahPemakaian; i++) {
        const biayaKWH = i * tagihan.tarifPerKWH;
        const subTotalPerKWH = biayaKWH + tagihan.abodemen;
        subtotal += subTotalPerKWH;
        rincianHTML += `<tr><td>${i}</td><td>${biayaKWH}</td><td>${tagihan.abodemen}</td><td>${subTotalPerKWH}</td></tr>`;
    }

    const pajak = (tagihan.pajak / 100) * subtotal;
    const totalBayar = subtotal + pajak;

    document.getElementById("rincianTagihan").innerHTML = rincianHTML;
    document.getElementById("subtotal").textContent = subtotal;
    document.getElementById("pajak").textContent = pajak;
    document.getElementById("bayar").textContent = totalBayar;

    document.getElementById("namaPelangganOutput").textContent = namaPelanggan;
    document.getElementById("kategoriOutput").textContent = kategori;
    document.getElementById("jumlahPemakaianOutput").textContent = jumlahPemakaian;
}

function resetForm() {
    document.getElementById("namaPelanggan").value = "";
    document.getElementById("kategori").value = "Sosial";
    document.getElementById("jumlahPemakaian").value = "";
    document.getElementById("rincianTagihan").innerHTML = "";
    document.getElementById("subtotal").textContent = 0;
    document.getElementById("pajak").textContent = 0;
    document.getElementById("bayar").textContent = 0;
    document.getElementById("namaPelangganOutput").textContent = "";
    document.getElementById("kategoriOutput").textContent = "";
    document.getElementById("jumlahPemakaianOutput").textContent = "";
}
