const classifyAge = (age) => {
  if (age >= 18) {
    console.log(`${age} y.o. is old enough`);
  } else if (age >= 0 && age < 18) {
    console.log(`${age} y.o. is still very young`);
  } else {
    console.log(`${age} y.o. is still an idea`);
  }
};

classifyAge(27);
classifyAge(7);
classifyAge(-4);
