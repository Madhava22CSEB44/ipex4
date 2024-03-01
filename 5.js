let cars = [
  {
    "car_name": "innova",
    "type": "sedan",
    "manufactured": new Date('2019-05-13'),
    "price": 800000
  },
  {
    "car_name": "verna",
    "type": "prime",
    "manufactured": new Date('2021-07-06'),
    "price": 250000
  },
  {
    "car_name": "mahindra suv500",
    "type":"xuv",
    "manufactured": new Date('2020-09-22'),
    "price": 300000
  },
  {
    "car_name": "thar",
    "type": "jeep",
    "manufactured": new Date('2021-03-23'),
    "price": 490000
  },
]
console.log("Original Products are:")
console.log(cars)
let sortedcars = cars.sort(
    (p1, p2) => (p1.price >p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0);

console.log("Products sorted based on ascending order of their prices are:")
console.log(sortedcars);
