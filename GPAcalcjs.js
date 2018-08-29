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

// "this" is passed in html
// function deletethisRow(row) {
//   var i = row.parentNode.parentNode.rowIndex;
//   document.getElementById("maintable").deleteRow(i);
// }

// Clears out data of specific row
function deletethisRow(row) {
  document.getElementById("course" + row).value = "Course name...";
  document.getElementById("course" + row).style.color = "lightgray";

  document.getElementById("credit" + row).value = "Credit hours (ex. 1.25)";
  document.getElementById("credit" + row).style.color = "lightgray";

  // Go back to first option in the drop down
  document.getElementById("form" + row).selectedIndex = 0;
}

// Clears out all of the data in the rows
function reset() {
  var numCourses = document.getElementById("maintable").rows.length;
  for (i = 1; i <= numCourses - 1; i++) {
    document.getElementById("course" + i).value = "Course name...";
    document.getElementById("course" + i).style.color = "lightgray";

    document.getElementById("credit" + i).value = "Credit hours (ex. 1.25)";
    document.getElementById("credit" + i).style.color = "lightgray";

    // Go back to first option in the drop down
    document.getElementById("form" + i).selectedIndex = 0;
  }
}
