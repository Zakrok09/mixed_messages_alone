//Possible words/phrases stored in arrays.
const greetings = ["Hello there,", "Howdy,", "Seems like", "Woah,", "Hewwo,", "Hola,", "Yo"];
const looking = ["pretty fabilous", "astonishing", "dirty", "like LinuxTechTips", "sleepy", "exhausted"];
const question = ["Wanna hit the gym?", "Wanna go to the cinema?", "Wanna go eat some enchiladas?", "Wanna play LoL?", "Wanna watch YouTube?", "Wanna invest in Dogecoin?"];

//Generating three random numbers to use when forming the message.
let rand1 = Math.floor(Math.random() * greetings.length);
let rand2 = Math.floor(Math.random() * looking.length);
let rand3 = Math.floor(Math.random() * question.length);

console.log(`${greetings[rand1]} you look ${looking[rand2]}. ${question[rand3]}`);
