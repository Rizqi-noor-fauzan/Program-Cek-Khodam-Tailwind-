const khodamList = [
  "Khodam Lalat Sumbing",
  "Khodam Macan Putih",
  "Khodam Putri Duyung",
  "Khodam Batu Batre",
  "Khodam Macan Tutul",
  "Khodam Buaya Darat",
  "Khodam Ular ",
  "Khodam Kalajengking",
  "Khodam Cewe Warkop ",
  "Tidak Ada",
  "Khodam Belut Listrik",
  "Khodam Jangkrik",
  "Khodam Gajah Laut",
  "Khodam Kerbau Laut",
  "Khodam Babi Ngepet",
];

const formKhodam = document.getElementById("khodamForm");

formKhodam.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
  if (nama) {
    const randomKhodam = Math.floor(Math.random() * khodamList.length);
    const khodamTerpilih = khodamList[randomKhodam];
    const namaElement = document.createElement("p");
    namaElement.textContent = `Nama anda adalah: ${nama}`;
    resultDiv.appendChild(namaElement);

    const khodamElement = document.createElement("p");
    khodamElement.textContent = `Khodam anda adalah: ${khodamTerpilih}`;
    resultDiv.appendChild(khodamElement);
    setTimeout(() => {
      resultDiv.textContent = "";
    }, 6000);
  } else {
    resultDiv.textContent = "Nama tidak boleh kosong";
  }
});
