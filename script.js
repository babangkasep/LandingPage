let basePrice = 100000;

function calculateTotal() {
  let total = basePrice;

  if (document.getElementById("frame").checked) {
    total += 15000;
  }

  if (document.getElementById("antiAir").checked) {
    total += 10000;
  }

  document.getElementById("total").innerText = total;
}

document.querySelectorAll("input, select").forEach(el => {
  el.addEventListener("change", calculateTotal);
});

function orderNow() {
  let plate = document.getElementById("plate").value;
  let color = document.getElementById("color").value;
  let region = document.getElementById("region").value;
  let total = document.getElementById("total").innerText;

  let message = `Halo, saya ingin pesan plat nomor:\n
Nomor: ${plate}
Warna: ${color}
Wilayah: ${region}
Total: Rp${total}`;

  let url = `https://wa.me/628XXXXXXXXXX?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}