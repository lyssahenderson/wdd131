function getGrades(inputSelector) {
    // get grades from the input box
    const grades = document.querySelector(inputSelector).value;
    // split them into an array (String.split(','))
    const gradesArray = grades.split(",");
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades);
    // return grades
    return cleanGrades;
}
  
function lookupGrade(grade) {
    // Convert the letter grade to GPA points
    if (grade === "A") return 4;
    if (grade === "B") return 3;
    if (grade === "C") return 2;
    if (grade === "D") return 1;
    if (grade === "F") return 0;
    
    // Return null for unrecognized grades
    return null;
}
  
function calculateGpa(grades) {
    // Convert letter grades to GPA points
    const gradePoints = grades.map((grade) => lookupGrade(grade)).filter(point => point !== null);
    
    // Check if there are valid grade points
    if (gradePoints.length === 0) {
      return "No valid grades entered";  // Handle case where there are no valid grades
    }
  
    // Calculate the GPA
    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    
    // Return the GPA rounded to 2 decimal places
    return gpa.toFixed(2);
}
  
  
function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector passed in
    const outputElement = document.querySelector(selector);
    outputElement.innerText = gpa;
}
  
function clickHandler() {
    // when the button in our html is clicked
    // get the grades entered into the input
    const grades = getGrades("#grades");
    // calculate the gpa from the grades entered
    const gpa = calculateGpa(grades);
    // display the gpa
    outputGpa(gpa, "#output");
}
  
document.querySelector("#submitButton").addEventListener("click", clickHandler);