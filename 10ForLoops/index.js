let sum = 0;
for (let i = 0; i < 10; ++i) {
  console.log(i + 1);
  sum += i;
}

alert("Sum is " + sum);

let student = {
  kishor: 1,
  pallabi: 2,
  mondira: 3,
  madhab: 4
}

// For In
for (let i in student)
  console.log(i);

// For Of
for (let a of "kishor")
  console.log(a);