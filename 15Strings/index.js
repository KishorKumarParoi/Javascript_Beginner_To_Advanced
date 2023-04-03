let myName = "Kishor";
console.log(myName.length);
let surName = 'Paroi';
console.log(surName.length);

// let wrong = "Kishor'; wrong, don't do this
console.log(myName + " " + surName);

// Template Literals
let girl = "Pallabi";
let boy = "Kishor";

let sentence = `${boy} is boyfriend of ${girl}`; // string interpolation
console.log(sentence);

let fruit = 'Bana\'na'; // "banan\"na"
console.log(fruit);
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());

// Slice
console.log(myName.slice(2,4));
console.log(myName.slice(1));

// replace
console.log(myName.replace("sh","kkp"));
console.log(myName.replace("r","4"));

// concat
console.log;
console.log(myName.concat(" Kumar Paroi ", fruit , " ok!!"));

// trim
let friend = "      Nusrat   ";
console.log(friend.trim());

let fr = "Raman " + "Pallabi" + " Kishor";
console.log(fr[4]);
console.log(fr);

for(let x of fr){
  console.log(x);
}