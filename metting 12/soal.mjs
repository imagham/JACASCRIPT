// no 2
// function PrintMassages(params) {
//     setTimeout(function(){
//         console.log("selesai");
//     }, 2000);
//     console.log("mulai");
    
// }
// PrintMassages()
// end no 1 
// no 2
// let iya=0
// function printEverySecond() {
//    const hallo=setInterval(() => {
//        console.log("hello World");
//        iya++
//        if (iya>1) {
//         clearInterval(hallo)
//     }
//    }, 1000);
// }
// printEverySecond()
// end no 2
// no 3
// function greet(name,callback) {
//     console.log(`hello${name}`);
//     setTimeout(function(){
//         callback()
//     }, 1000);
// }
// function sayGoodbay() {
//     console.log("Goodbye");
    
// }
// greet('fadgham',sayGoodbay)
// end no 3
// no 4
function performtasks(callback) {
    console.log("tugas 1");
    setTimeout(function(){
        console.log("tugas 2");
     }, 3000);
      setTimeout(function(){
        console.log('tugas 3');
     }, 1000);
}
performtasks()
