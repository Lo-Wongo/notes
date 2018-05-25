

//======Destructuring========

//along with arrow functions, let, and const, destructuring is probably something you're going to be using every single day
//Destructuring allows us to extract data from arrays, objects, maps, and sets
//it allows us to extract properties from an object or items from an array, multiple at a time

//what problem does destructuring really solve


//===== case 1 =====

//sometimes you need top level variables like so;
const person = {
    first: 'Wes',
    last: 'Bos',
    country: 'Canada',
    city: 'Hamilton',
    twitter: '@wesbos'
  };

//You've got this repetitive code over and over again, 
//where you need to make a variable from something that is inside of an object or inside of an array
  const first = person.first;
  const last = person.last;

//instead of creating multiple variables like above, we destructure them in a single line
//we're taking the 'first' and the 'last' property and putting them into two new variables that will be scoped to the parent block (or window)
const { first, last } = person;

//similarly, if I also wanted twitter, I would just add twitter into that, and I would get a third top level variable inside of my actual scope
const { first, last, twitter } = person;


console.log(first); // Wes
console.log(last); // Bos





//===== Case 2 =====/
//The above use case is just one nested level.
//In React.js you often want to use destructuring because the data is so deeply nested in props or state


//let's say we have some deeply nested data like we might get back from a JSON api
const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
      social: {
        twitter: 'https://twitter.com/wesbos',
        facebook: 'https://facebook.com/wesbos.developer',
      },
      web: {
        blog: 'https://wesbos.com'
      }
    }
  };
//I want to be able to pull out 'twitter' and 'facebook' URLs. Problem is, they are nested inside social object that is inside the links object that is inside the wes object
  
//doing it like below, is annoying
const twitter = wes.links.social.twitter;
const facebook = wes.links.social.facebook;

//Use destructuring to do it one line better
const { twitter, facebook } = wes.links.social;
console.log(twitter, facebook); // logs the 2 variables 



const person = {  
    name: 'Luke',
    age: '24',
    facts: {
      hobby: 'Photo',
      work: 'Software Developer'
    }
  }

//Now, what if we want to extract something deeper in the object structure — say the person’s hobby?
const {facts: {hobby}} = person;  
console.log(hobby); // 'Photo'  

//destructuring function parameters.
//Say your function gets an object as a parameter. Then you can destructure the parameter straight in the parameter list!
const toString = ({name, age}) => {  
    return `${name} is ${age} years old`;
  }
  
toString(person); // Luke is 24 years old  