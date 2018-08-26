// Empties value in the input boxes when clicked
function emptyBox(idName) {
  if (document.getElementById(idName).value == "Search...") {
    document.getElementById(idName).value = "";
  }
  if (document.getElementById(idName).value == "Credit hours (ex. 1.25)") {
    document.getElementById(idName).value = "";
  }
  if (document.getElementById(idName).value == "Course name...") {
    document.getElementById(idName).value = "";
  }
  document.getElementById(idName).style.color = "black";
}

function calculate() {
  // Dictionary for grade conversions
  var numCourses = 4; // Change later to account for people with more than four classes
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
    F: 0
  };

  var i;
  var totalQualPoints = 0;
  var totalCredits = 0;
  for (i = 1; i < numCourses + 1; i++) {
    // Getting the numeric GPA value
    var currentForm = document.getElementById("form" + i.toString());
    var optionChosen = currentForm.options[currentForm.selectedIndex].value;
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
  document.getElementById("gpa").innerHTML = currentGPA;
  // document.getElementById("gpa").style.display = "compact";
}

function reset() {
  var numCourses = 4; // Change later if there's more than one class
  for (i = 1; i < numCourses + 1; i++) {
    document.getElementById("course" + i).value = "Course name...";
    document.getElementById("course" + i).style.color = "lightgray";

    document.getElementById("credit" + i).value = "Credit hours (ex. 1.25)";
    document.getElementById("credit" + i).style.color = "lightgray";

    // Go back to first option in the drop down
    document.getElementById("form" + i).selectedIndex = 0;
  }
}
