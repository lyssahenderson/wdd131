//  arrays.js

// Activity 1
// Step 1: Correct function syntax
const listTemplate = (step) => `<li>${step}</li>`; 

// Step 2: Your array of steps
const steps = ["one", "two", "three"];

// Step 3: Map the steps array to HTML list items
const stepsHtml = steps.map(listTemplate); 

// Step 4: Set the innerHTML of the element, joining without commas
document.querySelector("#myList").innerHTML = stepsHtml.join('');


// Activity 2/3
// Step 1: Declare an array of letter grades
const grades = ['A', 'B', 'A'];

// Step 2: Function to convert letter grades to GPA points
function convertToGpa(grade) {
  if (grade === 'A') return 4;
  if (grade === 'B') return 3;
  if (grade === 'C') return 2;
  if (grade === 'D') return 1;
  if (grade === 'F') return 0;
  return null;
}

// Step 3: Convert the grades to GPA points using map
const gpaPoints = grades.map(convertToGpa);

// Step 4: Use reduce to calculate the total GPA points
const totalGpaPoints = gpaPoints.reduce((acc, curr) => acc + curr, 0);

// Step 5: Calculate the average GPA by dividing by the number of grades
const gpa = totalGpaPoints / gpaPoints.length;

console.log(gpa); // Output: 3.67 (for example)


// Activity 4
// Step 1: Declare the array of fruits
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

// Step 2: Use filter to keep only fruits longer than 6 characters
const longFruits = fruits.filter(fruit => fruit.length > 6);

// Step 3: Output the result
console.log(longFruits); // Output: ['watermelon']


// Activity 5
// Step 1: Declare the array
const numbers = [12, 34, 21, 54];

// Step 2: Declare the lucky number
const luckyNumber = 21;

// Step 3: Use indexOf to check if the lucky number is in the array
const index = numbers.indexOf(luckyNumber);

// Step 4: Output the result
if (index !== -1) {
  console.log(`Lucky number found at index ${index}`);
} else {
  console.log('Lucky number not found in the array');
}