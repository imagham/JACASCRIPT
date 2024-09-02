// no 1
const datadiri={
    name:"fadgham",
    age:"16 th",
    addres:{
        city :"Tangerang",
        country :"indonesia"
    }
}
datadiri.name="khairul"
datadiri ['age']='25'
console.log(datadiri['name']);
console.log(datadiri['age']);
console.log(datadiri.age);

delete datadiri.addres
console.log(datadiri['addres']);
// no 2
const {name,age,addres}=datadiri
console.log(name,age,addres);
const {name:n,age:b,addres:a}=datadiri
console.log(n,b,a);
// no 3
class book{
    constructor(judul,jenis){
        this.judul=judul
        this.jenis=jenis
    }
    getInfo(){
        return`This is ${this.judul},genre ${this.jenis}.`;
    }
}
const buku= new book ("kitabuttauhid",'agama')
console.log(buku.getInfo());
