let marks = [12, 23, 23, "Not Present", 242, false, null];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[10]);
console.log(marks);

console.log("The Length of marks : ", marks.length);
marks[7] = "Kishor";
marks[10] = "KKP";
marks[0] = "Pallabi";   // Arrays are mutable, hence array's item can be changed. Strings are immutable so can't be changed

console.log(marks);
console.log("The Length of marks : ", marks.length);