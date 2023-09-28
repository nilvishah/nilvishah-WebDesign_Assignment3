//Web Assignment 3
function Title(t1) 
{ 
  this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
  return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");
function displayInfo() {
  var fullName = "Nilvi Shah"; 
  var nuid = "002838651"; 

  var fullNameNUID = document.getElementById("fullNameNUID");
  fullNameNUID.textContent = "Full Name: " + fullName + " | NUID: " + nuid;
}

window.onload = displayInfo;
const table = document.getElementById("myTable");

let countBoxPresent = 0;

const checkRows = table.getElementsByTagName("input");
hideOnStart();

function hideOnStart(){
  var count=0;
  let submitBtn = document.getElementById("button");
  for(var i = 0; i < checkRows.length; i++){
    var row = checkRows[i].parentNode.parentNode;
    
    if(!checkRows[i].checked){
      count++;
      row.querySelectorAll("td")[8].classList.add("colHide");
      row.querySelectorAll("td")[9].classList.add("colHide");
    }

    if(checkRows.length === count){

    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.border = "";
    submitBtn.style.cursor = "initial";
    submitBtn.disabled = true;
      document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("colHide");
      document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("colHide");
    }
  }
}


selectRow();

let boolean = true; 

let mainRetoric = true;  //boolean values

function rowOne(r) {
    const i = r.parentNode.parentNode.rowIndex;
    const row = r.parentNode.parentNode;
    const descRow = row.nextSibling; 
    if (mainRetoric) {
      descRow.style.display = "table-cell";
      mainRetoric = false;
    } else {          
      descRow.style.display = "none";
      mainRetoric = true;
    }
}


function rowTwo(r) {  
  const row = r.parentNode.parentNode;
  const descRow = row.nextSibling.nextSibling; 
  if (boolean) {
    descRow.style.display = "table-cell";
    boolean = false;
  } else {          
    descRow.style.display = "none";
    boolean = true;
  }
}

function deleteRow(button) {
  var row = button.closest('tr'); 
    var studentName = row.cells[1].textContent;
    var confirmation = confirm("Are you sure you want to delete the record for " + studentName + "?");
    if (confirmation) {
        row.remove(); 
        alert(studentName + " Record deleted successfully");
    }
}
let studentName;
function editRow(button){
  var row = button.closest('tr'); 
    var studentName = row.cells[1].textContent;
    window.prompt("Edit " + studentName + " details");
}


function closePopup(button) {
  var editPopup = button.closest('.edit-popup');
  if (editPopup) {
      editPopup.remove();
  }
}

function addRow() {
  const row = table.insertRow(table.rows.length);

  const rowCount = table.rows.length;
  const checkboxNew = row.insertCell(0);
  const student = row.insertCell(1);
  const advisor = row.insertCell(2);
  const awardStatus = row.insertCell(3);
  const semester = row.insertCell(4);
  const type = row.insertCell(5);
  const budget = row.insertCell(6);
  const percentage = row.insertCell(7);
  const deleteBtn = row.insertCell(8);
  const editBtn = row.insertCell(9);

  checkboxNew.innerHTML = `<td><input type="checkbox" /><br /><br /><img onClick="rowOne(this)" src="down.png" width="25px" /></td>`;

  student.innerHTML = `Student ${Math.ceil(rowCount/ 2)}`;
  advisor.innerHTML = `Teacher ${Math.ceil(rowCount/ 2)}`;
  awardStatus.innerHTML = "Approved";
  semester.innerHTML = "Fall";
  type.innerHTML = " TA ";
  budget.innerHTML = Math.ceil(Math.random() * 100000);
  percentage.innerHTML = "100%";

  try {
    setTimeout(() => {alert(`Student ${Math.ceil(rowCount/ 2)} Added Successfully!`)}, 100);
  } catch (error) {
    alert("Something went wrong!");
  }
  
  selectRow();

  nextRowAddition();
  hideOnStart();
}

function nextRowAddition() {
  const row = table.insertRow(table.rows.length);

  row.classList.add("dropDownTextArea")
  
  row.innerHTML = 
      '<td colspan="10"> \
        Advisor:<br /><br /> \
        Award Details<br /> \
        Summer 1-2014(TA)<br /> \
        Budget Number: <br /> \
        Tuition Number: <br /> \
        Comments:<br /><br /><br /> \
        Award Status:<br /><br /><br /> \
      </td>';

  selectRow();
}

window.addEventListener("click", () => {

  let submitBtn = document.getElementById("button");

  if (countBoxPresent > 0) {    
    submitBtn.style.backgroundColor = "orange";
    submitBtn.style.border = "2px solid orange";
    submitBtn.style.cursor = "pointer";
    submitBtn.disabled = false;
  } else {
    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.border = "";
    submitBtn.style.cursor = "initial";
    submitBtn.disabled = true;
  }
}
)


var rowname;
// selectRow();

function selectRow() {
  for (let i=0; i<checkRows.length; i++) {
      const row = checkRows[i].parentNode.parentNode;
      rowname=checkRows;
      
      checkRows[i].addEventListener("click", () => {
        if (checkRows[i].checked) {
          countBoxPresent++;
          row.style.backgroundColor = "yellow";
          row.lastElementChild.innerHTML = "<td><button onClick='editRow(this)'>Edit Row</button></td>";
          row.lastElementChild.previousElementSibling.innerHTML = "<td><button onClick='deleteRow(this)'>Delete Row</button></td>";
          document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.remove("colHide");
          document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.remove("colHide");
          row.querySelectorAll("td")[8].classList.remove("colHide");
          row.querySelectorAll("td")[9].classList.remove("colHide");
        } else {
          countBoxPresent--;
          row.style.backgroundColor = "white";
          row.lastElementChild.innerHTML = "";
          row.lastElementChild.previousElementSibling.innerHTML = "";
          document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("colHide");
          document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("colHide");
          row.querySelectorAll("td")[8].classList.add("colHide");
          row.querySelectorAll("td")[9].classList.add("colHide");
        }
      })
  }
}
