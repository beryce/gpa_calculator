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

function deletethisRow(row) {
  var i = row.parentNode.parentNode.rowIndex;
  document.getElementById("maintable").deleteRow(i);
}

// var deleteCounter = 0;
// function numDeleted() {
//   var deleteCounter = deleteCounter + 1;
//   console.log("deleteCounter:");
//   console.log(deleteCounter);
//   return deleteCounter;
// }

// function coursesTotal() {
//   numDeletedRows = numDeleted();
//   var totalCourses = 4 - numDeleted;
//   return totalCourses;
// }

function calculate() {
  // Dictionary for grade conversions
  var numCourses = 4;
  console.log("numCourses:");
  console.log(numCourses); // Change later to account for people with more than four classes
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
  for (i = 1; i < numCourses + 1; i++) {
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

var numRows = document.getElementById("maintable").rows.length;
console.log("numRows:");
console.log(numRows);
function addRow() {
  var row = document.createElement("tr");
  var col2 = document.createElement("td");
  var col3 = document.createElement("td");

  var cell1 = row.insertCell(0);
  var classtitle = document.createElement("input");
  classtitle.setAttribute("type", "text");
  classtitle.setAttribute("value", "Course name...");
  classtitle.setAttribute("id", "course" + numRows);
  classtitle.setAttribute("class", "course-input");
  cell1.appendChild(classtitle);

  var cell2 = row.insertCell(1);
  var gradeselect = document.createElement("SELECT");

  var gradelist = [
    "Select...",
    "A (4.00)",
    "A- (3.67)",
    "B+ (3.33)",
    "B (3.00)",
    "B- (2.67)",
    "C+ (2.33)",
    "C (2.00)",
    "C- (1.67)",
    "D (1.00)",
    "F (0.00)"
  ];

  var g;
  var index = 0;
  for (g = 0; g < gradelist.length; g++) {
    var option = document.createElement("option");
    option.text = gradelist[g];
    gradeselect.add(option, index);
    index = index + 1;
  }
  gradeselect.setAttribute("id", "form" + numRows);
  gradeselect.setAttribute("class", "form-control");
  cell2.appendChild(gradeselect);

  var cell3 = row.insertCell(2);
  var credit = document.createElement("input");
  credit.setAttribute("type", "text");
  credit.setAttribute("value", "Credit Hours (ex. 1.25)");
  credit.setAttribute("id", "credit" + numRows);
  credit.setAttribute("class", "credit-input");
  cell3.appendChild(credit);

  var button = document.createElement("button");
  button.setAttribute("class", "btn btn-outline-danger btn-sm");
  button.setAttribute("id", "trash");
  var icon = document.createElement("i");
  icon.className = "fa fa-trash";
  button.appendChild(icon);

  cell3.appendChild(button);

  col2.innerHTML = "Select...";
  col3.innerHTML = "Credit hours (ex. 1.25)";
  var table = document.getElementById("maintable");
  table.appendChild(row);
  numRows = numRows + 1;
}
