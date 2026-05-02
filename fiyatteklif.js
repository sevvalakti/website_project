function sendWhatsapp() {

    let pickup = document.getElementById("pickup").value;
    let dropoff = document.getElementById("dropoff").value;
    let passenger = document.getElementById("passenger").value;
    let date = document.getElementById("date").value;

    if (!pickup || !dropoff || !passenger || !date) {
        alert("Lütfen tüm alanları doldurun");
        return;
    }

    let message =
`VIP Transfer Talebi

📍 Alış: ${pickup}
📍 Varış: ${dropoff}
👥 Yolcu: ${passenger}
📅 Tarih: ${date}`;

    let phone = "905467867953";

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}