// Import stylesheets
import './style.css';

// object creation
const details = { 
  name: 'John',
  surname: 'Doe',
  age: 20
};
console.log(details); // display object 

const person = {
  name: 'Akinlade',
  age: 30,
  // using function as a value
  greet: function() { console.log('hello') }
}

person.greet();
console.log(person.age)