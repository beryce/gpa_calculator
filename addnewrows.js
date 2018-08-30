var numRows = document.getElementById("maintable").rows.length;
console.log("numRows:");
console.log(numRows);

function addRow() {
  var row = document.createElement("tr");
  var col2 = document.createElement("td");
  var col3 = document.createElement("td");

  // Cell for course input
  var cell1 = row.insertCell(0);
  var classtitle = document.createElement("input");
  classtitle.setAttribute("type", "text");
  classtitle.setAttribute("value", "Course name...");
  classtitle.setAttribute("id", "course" + numRows);
  classtitle.setAttribute("class", "course-input");
  emptyBoxArg1 = "course" + numRows;
  classtitle.setAttribute("onclick", "emptyBox(emptyBoxArg1);");
  cell1.appendChild(classtitle);
  var cell2 = row.insertCell(1);

  // Cell for selecting grades
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

  var gradevalue = [
    "Select",
    "A",
    "Amin",
    "Bplus",
    "B",
    "Bmin",
    "C+",
    "C",
    "Cmin",
    "D",
    "F"
  ];

  // Adding the letter grade options
  var g;
  var index = 0;
  for (g = 0; g < gradelist.length; g++) {
    var option = document.createElement("option");
    option.text = gradelist[g];
    option.value = gradevalue[g];
    gradeselect.add(option, index);
    index = index + 1;
  }
  gradeselect.setAttribute("id", "form" + numRows);
  gradeselect.setAttribute("class", "form-control");
  cell2.appendChild(gradeselect);

  // Cell for entering number of credit hours
  var cell3 = row.insertCell(2);
  var credit = document.createElement("input");
  credit.setAttribute("type", "text");
  credit.setAttribute("value", "Credit hours (ex. 1.25)");
  credit.setAttribute("id", "credit" + numRows);
  credit.setAttribute("class", "credit-input");
  emptyBoxArg2 = "credit" + numRows;
  credit.setAttribute("onclick", "emptyBox(emptyBoxArg2);");
  cell3.appendChild(credit);

  // Trash button
  var button = document.createElement("button");
  button.setAttribute("class", "btn btn-outline-danger btn-sm");
  button.setAttribute("id", "trash");
  strnumrow = numRows.toString();
  button.setAttribute("onclick", "deletethisRow(strnumrow);");
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
