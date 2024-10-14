// no 1
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("Data fecthed");
    } else {
      reject("Download failed");
    }
  }, 3000);
});
Promise.all([fetchData])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// //   end no 1
// // no 2
const statis = [3, 7, 1, 6];
const checkNumber = new Promise((resolve, reject) => {
  if (statis[0] > 5) {
    resolve("lebih dari 5");
  } else if(statis[0] <= 5) {
    reject("Number too low");
  }
});
Promise.all([checkNumber,7])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// end no 2
// no 3
const fecthedStep1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Step 1 Complete')
    }, 1000);
});
const fecthedStep2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Step 2 Complete')
    }, 2000);
});
const fecthedStep3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Step 3 Complete')
    }, 3000);
});

Promise.all([fecthedStep1,fecthedStep2,fecthedStep3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
//  end no 3
// no 4
const simulateTask = new Promise((resolve, reject) => {
    var angka=3000
    setTimeout(() => {
        if (angka<=2000) {
            resolve('Task Success')
            
        }else{
            reject('Text Filed')
        }
    }, angka);
});
Promise.all([simulateTask])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally((console.log('Task Completed')
  ))
// end no 4
// no 5
const fecthedDataA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data A')
    }, 1000);
});
const fecthedDataB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data b')
    }, 2000);
});
Promise.all([fecthedDataA,fecthedDataB])
  .then((result) => {
    console.log(result);
  })
  
  .catch((error) => {
    console.log(error);
  })
  