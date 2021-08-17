const person = ['She ', 'He ', 'The dog ', 'My college ', 'My teacher '];
const verb = ['likes ', 'enjoys ', 'dislikes ', 'fears ', 'are good at '];
const object = ['football.', 'being angry.', 'flowers.', 'drinking coffee.', 'sunny weather.']



let returnString = [];
const addWord = (list) =>{returnString.push(list[Math.floor(Math.random()*5)])};
addWord(person);
addWord(verb);
addWord(object);

console.log(returnString.join(''));s