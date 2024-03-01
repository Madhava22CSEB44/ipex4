function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
var a=prompt("enter :");
const res=capitalizeFirstLetter(a);
console.log(res);
