function proses() {
    var merkMotor = document.getElementById("merk_motor").value;
    var hargaMotor = 0;
    var aksesoris = [];
    var totalAksesoris = 0;
    var pembayaran = document.querySelector('input[name="pembayaran"]:checked').value;
    var bungaDiskon = 0;
    var total = 0;

    switch (merkMotor) {
        case "honda":
            hargaMotor = 15000000;
            break;
        case "yamaha":
            hargaMotor = 14000000;
            break;
        case "suzuki":
            hargaMotor = 13000000;
            break;
    }

    if (document.getElementById("velg").checked) {
        aksesoris.push("Velg");
        totalAksesoris += 450000;
    }
    if (document.getElementById("helm").checked) {
        aksesoris.push("Helm");
        totalAksesoris += 250000;
    }
    if (document.getElementById("jaket").checked) {
        aksesoris.push("Jaket");
        totalAksesoris += 300000;
    }

    total = hargaMotor + totalAksesoris;

    if (pembayaran === "tunai") {
        bungaDiskon = total * 0.1;
    } else if (pembayaran === "kredit") {
        bungaDiskon = total * 0.15;
    }

    document.getElementById("harga").value = hargaMotor;
    document.getElementById("bunga_diskon").value = bungaDiskon;
    document.getElementById("total").value = total;
}

function reset() {
    document.getElementById("merk_motor").value = "honda";
    document.getElementById("velg").checked = false;
    document.getElementById("helm").checked = false;
    document.getElementById("jaket").checked = false;
    document.getElementById("harga").value = "";
    document.getElementById("bunga_diskon").value = "";
    document.getElementById("total").value = "";
    document.getElementById("tunai").checked = true;
}
