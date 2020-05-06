
// DESTRUCTURING
// Below is an example of using destructuring to display a different user based on who is entered into the search parameters

const user1 = {
  name: "Reed",
  username: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"
  }
};

const user2 = {
  name: "Bob",
  username: "Reedbarger",
  email: "bob@gmail.com",
  details: {
    title: "Programmer"
  }
};

let user = user2; // This is where we define the user we want
function displayUserBio({name, email} = user) {
    let userBio = `Hello, my name is ${name} & you can reach me at ${email}`;
    console.log(userBio)
}
// displayUserBio()

///////////////////////////////////////////////////////////////////////////////

const sum = (...xyz) => xyz.reduce((a, b) => a + b, 0);
// console.log(sum(1, 2, 3));


function mixedNumbers(arr) {
  return mixedNumbers.push(arr);
  // return arr;
}
// console.log(mixedNumbers(['IV', 5, 'six']));



//////////////////////////////////////////////////////////////////////////



// let btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//   console.log('ITS WORKING'); // add functions to this trigger.
// })

////////////////////////////////////////////////////////////////////////////////

function solution(number){
  let numbers = [];
  for (i = number - 1; i >= 0; i--) {
    if (i % 3 === 0 || i % 5 === 0)
      numbers.push(i);
  } let getSum = (total, num) => {
  return total + Math.round(num);
}
  return numbers.reduce(getSum, 0)
}

////////////////////////////////////////////////////////////////////////////////

// Take a string & change the first letter of each word to a capitalized letter.

// function changeCase(str) {
//   let splitStr = str.split(' ');
//   for (var i = 0; i < splitStr.length; i++) {
//     return splitStr[i].unshift();
//   }
//   for (let i = 0; i < splitStr.length; i++) {
//     let firstLetter = splitStr[i][0].toUpperCase();
//     return firstLetter;
//   }
// }
  // console.log(remainder);

// ANSWER: ////////////////////////////////////////////////////////////////////

let toJadenCase = () => {
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

let phrase = 'this is only a test';

let changeCase = (str) => {
  return str.split(' ') // This returns our words as individual elements of an array
  .map( (str) => { // Here we MAP() over our array of individual words
    return str.charAt(0).toUpperCase() // We return the first character of each word as an uppercase letter
    + str.slice(1); // Here we add the remainder of the word to the capitalized first letter
  }).join(' ');
}

////////////////////////////////////////////////////////////////////////////////

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.




let test = 'The quick brown fox jumps over the lazy dog';

let check = (str) => {
  let alphabet = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
  str.split('').map( (letter) => {
    letter;
  })
}

// let pangramCheck = (str) => {
//   return str.split(' ').map( letter => {
//     for (let i = 0; i < alphabet.length; i++) {
//       return alphabet[i];
//     }
//     if (letter ) {
//
//     }
//   });
//
//   }
//   // return str.includes(alphabet, 1);
// }


// let test = 'Not today satan';
//
// let pangramCheck = (str) => {
//   return str.split('').map( str => {
//     if (str.includes('a') < 1) {
//       console.log('yup');
//     } else {
//       console.log('nope');
//     }
//   })
// }






// ANSWER: ////////////////////////////////////////////////////////////////////
