//clases

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    saludar () {
    console.log('hola, mi nombre es :' + this.name);
} 

}



const person1 = new person("Juan", 30);
person1.saludar(); // Output: hola, mi nombre es : Juan

console.log(person1.name); // Output: Juan
console.log(person1.age);  // Output: 30

console.log(person1);