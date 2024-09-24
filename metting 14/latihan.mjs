function helloWorld(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello World!')
      },2000 );
    })
  };
const messeges = async () => {
    var msg= await helloWorld()
    console.log(msg);
    
};
messeges()
function ambilDataUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then (function(response){
        return response.json()
    })
    .then (function (users) {
        console.log(users);
        
    })
}
ambilDataUser()