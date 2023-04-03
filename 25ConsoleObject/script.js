console.log(console);
console.info("info");
console.log("log");
console.warn("warn");
console.error("err");
console.assert("err" != false);
console.assert("err" == false);

console.time("forLoop")
for(let i = 0; i < 500; ++i){
  console.log(233);
}
console.timeEnd("forLoop");

console.time("WhileLoop")
let i = 0;
while(++i <= 500){
  console.log(233);
}
console.timeEnd("WhileLoop")