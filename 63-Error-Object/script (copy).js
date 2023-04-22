try {
  let age = prompt("Enter Your Age : ")
  age = Number.parseInt(age);

  console.log(Kishor)
  if (age > 150)
    throw new ReferenceError("Kishor get improved")
}
catch (error) {
  console.log(error.name)
  console.log(error.message)
  console.log(error.stack)
}

console.log("This Script is still running")
