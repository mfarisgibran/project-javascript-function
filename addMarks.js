const addMarks = (originalText, mark, amountOfMark) => {
  let modifiedText = originalText;

  for (let iteration = 1; iteration <= amountOfMark; iteration++) {
    modifiedText += mark;
  }

  return modifiedText;
};

console.log(addMarks("Hello", "!", 1));
console.log(addMarks("Hello", "!", 3));
console.log(addMarks("Servus", "!", 2));
console.log(addMarks("Servus", "!", 3));
