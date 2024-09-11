// no 1
function mandi() {
    console.log("mandi");
    
}
function sarapan(callback) {
    setTimeout(function(){
        console.log("Sarapan tertunda 3 detik");
        callback()
    }, 3000);
}
function berangkatSekolah() {
    console.log("Berangkat Sekolah");
    
}
mandi()
sarapan(berangkatSekolah)
// end no 1
function printEverySecond(params) {
        
}