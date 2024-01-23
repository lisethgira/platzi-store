const myName = 'Nicolas';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 32);

class Persona {
  age;
  name;

  getSummary() {
    return `my name is ${this.name}`;
  }
}
