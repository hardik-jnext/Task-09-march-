async function myfunc() {
  console.log("second");
  await console.log("third");
  console.log("four");
}
console.log("first");
myfunc();
console.log("fifth");
