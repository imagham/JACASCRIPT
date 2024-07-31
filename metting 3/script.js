// no 1
const pengunjung = 3;
if (pengunjung >= 5) {
  console.log("bayar tiket");
} else if (pengunjung >= 2 && pengunjung < 5) {
  console.log("bayar tiket setengah harga");
} else {
  console.log("tidak boleh masuk");
}
//  2
const pemiliksim = 4;
if (pemiliksim >= 17) {
  console.log("Wajib SIM");
}
if (pemiliksim >= 0 && pemiliksim < 17) {
  console.log("dilarang berkendara");
}
// 3
const angka = 3;
if (angka > 0) {
  console.log("positif");
} else if (angka >= -100 && angka < 0) {
  console.log("negatif");
} else {
  console.log("netral");
}
// no 4
const x = 17;
const y = -17;
if (x > 0 && y > 0) {
  console.log("kanan atas");
} else if (x < 0 && y < 0) {
  console.log("kiri bawah");
} else if (x > 0 && y < 0) {
  console.log("kanan bawah");
} else if (x < 0 && y > 0) {
  console.log("kiri atas");
}
// no 5
const total = 100;
if (total >= 200) {
  console.log("diskon 20%");
  const diskon = 0.2 * total;
  const totalharga = total - diskon;
  console.log(totalharga);
} else if (total >= 100 && total < 200) {
  console.log("diskon 10%");
  const diskon2 = 0.1 * total;
  const totalharga2 = total - diskon2;
  console.log(totalharga2);
} else {
  console.log("tidak ada diskond");
}
// no 6
const usia = 19;
if (usia >= 18) {
  console.log("Registrasi Berhasil");
} else {
  console.log("Registrasi Gagal");
}


