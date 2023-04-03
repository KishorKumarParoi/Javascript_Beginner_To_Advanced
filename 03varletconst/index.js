console.log("javascript: difference between var, let & const")
var a = 45;
var b = "harry";
{
  let b = 'this';
  console.log(b);
}
var c = null;
b = 4;
console.log(b);
var d = undefined;
console.log(b);

const k = 109; // const can't be changed
{
  let k = 102;
  console.log(k);
}
console.log(k);