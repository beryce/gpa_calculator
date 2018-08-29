// Calculates the GPA
function calculate() {
  var numCourses = document.getElementById("maintable").rows.length;
  console.log("numCourses:");
  console.log(numCourses);

  // Dictionary for grade conversions
  var gradeConversions = {
    A: 4.0,
    Amin: 3.67, // Amin = A-
    Bplus: 3.33,
    B: 3.0,
    Bmin: 2.67,
    Cplus: 2.67,
    C: 2.0,
    Cmin: 1.67,
    D: 1.0,
    F: 0,
    Select: 0
  };

  var i;
  var totalQualPoints = 0;
  var totalCredits = 0;
  for (i = 1; i <= numCourses - 1; i++) {
    // Getting the numeric GPA value
    console.log("i:");
    console.log(i);
    var currentForm = document.getElementById("form" + i.toString());
    console.log("currentForm:");
    console.log(currentForm);
    var optionChosen = currentForm.options[currentForm.selectedIndex].value;
    console.log("optionChosen:");
    console.log(optionChosen);
    var grade = gradeConversions[optionChosen];

    // Getting the input typed in credit hours box
    var creditNum = document.getElementById("credit" + i.toString()).value;
    if (isNaN(creditNum)) {
      // In case people have less than four classes
      creditNum = 0;
    }
    totalCredits = totalCredits + parseFloat(creditNum);

    var qualityPoints = grade * creditNum;
    totalQualPoints = totalQualPoints + qualityPoints;
  }
  var currentGPA = (totalQualPoints / totalCredits).toPrecision(6);
  console.log("currentGPA:");
  console.log(currentGPA);

  // If none of the slots were filled out, return error message
  if (isNaN(currentGPA)) {
    document.getElementById("gpa").innerHTML =
      "Select a grade and enter the amount of credit hours received";
  } else {
    document.getElementById("gpa").innerHTML = currentGPA;
  }
  // document.getElementById("gpa").style.display = "compact";
}
