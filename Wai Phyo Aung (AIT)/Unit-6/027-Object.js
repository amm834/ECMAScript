let obj = {};
console.log(obj);
let bio = {
  name: 'Aung Myat Moe',
  age: 17,
  pet: 'Noop Si',
  Dad: 'U Maung Shwe',
  mom: 'Daw Than Than Swe',
  isMarried: false,
  getName: function() {
    console.log(this.name);
  }
};
console.log(bio);
console.log(bio.name);
bio.getName();
bio.isProgrammer = true;
console.log(bio);

let obj2 = new Object();
obj2.name = "Aung Myat Moe";
console.log(obj2);

/* Object Function Construction */
function Person(name,email){
  this.name = name;
  this.email = email;
} // Blue Print

let person1 = new Person('AMM','amm@gmail.com');
let person2 = new Person('AMM2','amm2@gmail.com');
console.log(person1);
console.log(person2);