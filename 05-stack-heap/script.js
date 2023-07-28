const dogAge = 12;
let animal1 = {
  type: 'Dog',
  age: dogAge,
};

console.log(animal1, typeof animal1);
let newAge = age;
newAge = 14;
let newAnimal = animal1;
console.log(newAnimal, typeof newAnimal);
