var nilai = 61;
var totalkehadiran = 25;
var kehadiran = 0;
var lulus = (kehadiran / totalkehadiran) * 100;
// no 1
// A
if (nilai > 85) {
  console.log("nilai A");
  if (lulus >= 75) {
    console.log("lulus");
  } else {
    console.log("tidak lulus");
  }
}
// B
else if (nilai < 85 && nilai > 70) {
  console.log("nilai B");
  if (lulus >= 75) {
    console.log("lulus");
  } else {
    console.log("tidak lulus");
  }
}
// C
else if (nilai < 70 && nilai > 50) {
  console.log("nilai C");
  if (lulus >= 75) {
    console.log("lulus");
  } else {
    console.log("tidak lulus");
  }
}
// no 2

var terdaftar = true;
var pembayaransukses = true;
if (terdaftar==true) {
  if (pembayaransukses==true) {
    console.log('dapat mengikuti kursus');
    
  } else {
    console.log('tidak dapat mengikuti kursus');
    
  }
} else {
  console.log('tidak dapat mengikuti kursus');
  
}