const showNameWithAge = (name = "Someone", age = 0) => {
  const nameWithAge = `${name} is ${age} year(s) old`;

  return nameWithAge;
};

const bambang = showNameWithAge("Bambang", 47);
const anonymous = showNameWithAge(undefined, 19);
const budi = showNameWithAge("Budi", 27);

console.log(bambang);
console.log(anonymous);
console.log(budi);
