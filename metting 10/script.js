function luaspersegi(s){
    let luas = s * s ;
    return luas;
}
console.log(luaspersegi(4))



// Tugas Soal Part 10 
// Latihan soal ke 1
function registerUser(name, userType) {
    let welcomeMessage;
  
    if (userType === "VIP") {
      welcomeMessage = `Welcome VIP, ${name}!`;
    } else {
      welcomeMessage = `Welcome, ${name}!`;
    }
  
    return welcomeMessage;
  }
  
  // Memanggil fungsi dengan nama "Nina" dan userType "VIP"
  let result = registerUser("Nina", "VIP");
  
  // Menampilkan pesan selamat datang
  console.log(result); // Output: Welcome VIP, Nina!

// soal ke 1 bagian 2
  function applyDiscount(userType, purchaseAmount) {
    let discount;
  
    // Tentukan diskon berdasarkan jenis pengguna
    if (userType === "VIP") {
      discount = 20;
    } else {
      discount = 10;
    }
  
    // Hitung jumlah diskon
    let discountAmount = (discount / 100) * purchaseAmount;
  
    // Hitung total pembayaran setelah diskon
    let totalAfterDiscount = purchaseAmount - discountAmount;
  
    return totalAfterDiscount;
  }
  
  // Memanggil fungsi untuk pengguna VIP
  let vipTotal = applyDiscount("VIP", 200);
  console.log("Total pembayaran untuk VIP:", vipTotal);
  
  // Memanggil fungsi untuk pengguna non-VIP
  let nonVipTotal = applyDiscount("NON VIP", 100);
  console.log("Total pembayaran untuk non-VIP:", nonVipTotal);

  // Latihan Soal  ke 2 bagian ke 1
  function calculatePrice(quantity, pricePerItem, isMember) {
    let totalHarga = quantity * pricePerItem;
  
    if (isMember) {
      let diskon = totalHarga * 0.15;
      totalHarga -= diskon;
    }
  
    return totalHarga;
  }
  
  // Memanggil fungsi dengan argument 3, 150, dan true
  let hargaAkhir = calculatePrice(3, 150, true);
  
  // Menampilkan hasil ke layar
  console.log("Total harga yang harus dibayar:", hargaAkhir);
  

   // soal ke 2 bagian 2
   function confirmPurchase(isConfirmed, totalPrice) {
    if (isConfirmed) {
        console.log("Purchase confirmed with total price: " + totalPrice);
    } else {
        console.log("Purchase not confirmed");
    }
}

function calculatePrice() {
    // Misalnya, fungsi ini menghitung total harga
    return 150000; // ganti dengan logika perhitungan harga sebenarnya
}

// Memanggil fungsi confirmPurchase dengan isConfirmed true dan hasil dari fungsi calculatePrice
confirmPurchase(true, calculatePrice());


// Latihan soal ke 3 
function checkStock(item, requestedQuantity) {
  const stock = 50; // Stok barang yang tersedia

  // Memastikan requestedQuantity adalah angka positif
  if (requestedQuantity <= 0) {
    return "Jumlah yang diminta harus lebih dari 0.";
  }

  if (requestedQuantity <= stock) {
    return `Stock  insufficient ${item}`;
  } else {
    return `Stock insufficient ${item}`;
  }
}

// Memeriksa stok barang "laptop" dengan requestedQuantity 60
var stock = checkStock("60");
console.log(stock);

// Latihan soal ke 3 bagian 2
function calculateTax(price,location) {
} 

// Latihan soal ke 4 Bagian 1 
function calculateTax(price, location) {
  let taxRate;

  // Tentukan tarif pajak berdasarkan lokasi
  if (location === "Jakarta") {
    taxRate = 0.1; // 10%
  } else if (location === "Bandung") {
    taxRate = 0.05; // 5%
  } else {
    console.log("Lokasi tidak valid. Hanya Jakarta dan Bandung yang didukung.");
    return;
  }

  // Hitung jumlah pajak
  const taxAmount = price * taxRate;

  // Hitung harga akhir
  const finalPrice = price + taxAmount;

  return finalPrice;
}

// Panggil fungsi calculateTax dengan harga 1000 dan lokasi "Jakarta"
const finalPrice = calculateTax(1000, "Jakarta");

// Cetak hasil ke layar
console.log("Harga akhir setelah pajak:", finalPrice);
 

// Soal ke 4 Bagian 2
function displayResult(finalPrice, paymentStatus) {
  if (paymentStatus === "paid") {
      console.log("Payment successful! Total amount: " + finalPrice);
  } else {
      console.log("Payment pending");
  }
}

function calculateTax() {
  // Misalnya, fungsi ini menghitung harga akhir termasuk pajak
  const basePrice = 100000;
  const taxRate = 0.1; // 10% pajak
  return basePrice + (basePrice * taxRate);
}

// Memanggil fungsi displayResult dengan finalPrice dari fungsi calculateTax dan paymentStatus "paid"
displayResult(calculateTax(), "paid");

