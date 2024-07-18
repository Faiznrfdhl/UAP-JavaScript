const namaBarangSelect = document.getElementById('nama_barang');
const jumlahInput = document.getElementById('jumlah');
const hargaInput = document.getElementById('harga');
const totalInput = document.getElementById('total');

function hitungTotal() {
    const jumlah = parseInt(jumlahInput.value);
    const harga = parseInt(hargaInput.value);

    const totalHarga = jumlah * harga;

    totalInput.value = totalHarga;
}

function resetForm() {
    namaBarangSelect.value = 'monitor';
    jumlahInput.value = 1;
    hargaInput.value = 0;
    totalInput.value = 0;
}