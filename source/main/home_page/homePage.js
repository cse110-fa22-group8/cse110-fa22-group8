let user = sessionStorage.getItem("username");
// js to create a username icon with their name
let ele = document.getElementById("corner");
let node = document.createTextNode("Hi, " + user + "!");
ele.style.color = "white";
ele.prepend(node);

var bar = document.querySelector('[name="e"]'); // type box for search
var a = document.getElementById("filter"); // filter input

// Event listener for search()

bar.addEventListener(
  "change",
  function () {
    let filter = document.getElementById("filter");
    searchfilter(bar.value, filter.value);
  },
  false
);

// Event listener for Filter()
a.addEventListener(
  "change",
  function () {
    let search = document.querySelector('[name="e"]');
    searchfilter(search.value, a.value);
  },
  false
);
/**
 * Join function that gets fired when either search or filter is being used
 * Takes both values of search and filter to searchfilter the html table
 *
 * @param {string} searchVal The query term the user inputs
 * @param {string} filterVal The filter term the user inputs
 *
 */
function searchfilter(searchVal, filterVal) {
  rows = document.querySelector("#main-table").getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    rows[i].style.display = "table-row";
    rows[i].style.backdropFilter = "none";
    rows[i].style.borderRadius = "0px";
  }
  let count = 0;
  for (let i = 1; i < rows.length; i++) {
    if (rows[i].getElementsByTagName("td")[0].innerHTML.includes(searchVal)) {
      if (rows[i].getElementsByTagName("td")[1].innerHTML == filterVal) {
        rows[i].style.display = "table-row";
        if (count % 2 == 1) {
          rows[i].style.backdropFilter =
            "blur(3px) saturate(100%) contrast(45%) brightness(130%)";
          rows[i].style.borderRadius = "10px";
        }
        count++;
      } else if (filterVal == "" || filterVal == "All") {
        rows[i].style.display = "table-row";
        if (count % 2 == 1) {
          rows[i].style.backdropFilter =
            "blur(3px) saturate(100%) contrast(45%) brightness(130%)";
          rows[i].style.borderRadius = "10px";
        }
        count++;
      } else {
        rows[i].style.display = "none";
      }
    } else {
      rows[i].style.display = "none";
    }
  }
}

finalValue = [];

/**
 * This function will open the add expense UI element
 */
function openForm() {
  document.getElementById("expense").style.display = "block";
}
/**
 * This function will close the add expense UI element
 */
function closeForm() {
  document.getElementById("expense").style.display = "none";
  document.getElementById("name").value = "";
  document.getElementById("category").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("date").value = "";
}

/**
 * This function will open the update expense UI element
 */
function openUpdate() {
  document.getElementById("update").style.display = "block";
}
/**
 * This function will close the update expense UI element
 */
function closeUpdate() {
  document.getElementById("update").style.display = "none";
}

/**
 * This function will open the Chart UI element and render the chart based on data it pulls from the localStorage database
 */
function openChart() {
  document.getElementById("breakdown").style.display = "block";
  var xValues = ["Needs", "Wants", "Savings"];
  let expenses = JSON.parse(localStorage.getItem(user));
  let wants = 0;
  let needs = 0;
  let savings = 0;
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].category == "Wants") {
      wants += parseInt(expenses[i].value);
    } else if (expenses[i].category == "Needs") {
      needs += parseInt(expenses[i].value);
    } else if (expenses[i].category == "Savings") {
      savings += parseInt(expenses[i].value);
    }
  }
  var yValues = [needs, wants, savings];
  var barColors = ["#44B3F2", "#8CC3C7", "#2b5797"];

  new Chart("piechart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Expense Breakdown",
        fontSize: 25,
        fontFamily: "Montserrat",
        fontColor: "white",
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            return (
              data["labels"][tooltipItem["index"]] +
              ": $" +
              data["datasets"][0]["data"][tooltipItem["index"]]
            );
          },
        },
      },
    },
  });
}

/**
 * This function will close the chart UI element
 */
function closeChart() {
  document.getElementById("breakdown").style.display = "none";
}

/**
 *
 * This function will validate the input of an expense on the criteria that all the fields are not empty.
 *
 * @param {string} name Name of the expense
 * @param {string} category Category of the expense
 * @param {string} amount Amount for the expense
 * @param {string} date Date of the expense
 * @returns True or false depending on if the input is valid (whether it exists)
 */
const validateInput = (name, category, amount, date) => {
  if (name === "" || category === "" || amount === "" || date === "") {
    return false;
  }
  return true;
};

//Adds a click listener to the add-row buttons where after add expense button is pressed, form is opened
document.querySelector("#adding").addEventListener("click", () => {
  // Add elements in the Backend (add to storage) and in front end(add new row to table) and then close form
  let expenseName = document.getElementById("name").value;
  let expenseCategory = document.getElementById("category").value;
  let expenseAmount = document.getElementById("amount").value;
  let expenseDate = document.getElementById("date").value;

  // Check validity of input
  if (
    validateInput(expenseName, expenseCategory, expenseAmount, expenseDate) ===
    false
  ) {
    alert("Please fill out all fields!");
    closeForm();
    return;
  }

  addRow(expenseName, expenseCategory, expenseAmount, expenseDate);
  // Clear values in input boxes
  document.getElementById("name").value = "";
  document.getElementById("category").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("date").value = "";
  closeForm();
});

document.querySelector("#add-row").addEventListener("click", () => {
  // Open form item
  openForm();
});

document.querySelector("#chart").addEventListener("click", () => {
  // Open form item
  openChart();
});

/**
 *
 * This function will add a row in the database and the table UI with the expense that a user has submitted.
 *
 * @param {sring} expenseName The name of the expense the user entered
 * @param {string} expenseCategory The category of the expense the user entered
 * @param {string} expenseAmount The amount of the expense the user entered
 * @param {string} expenseDate The date of the expense the user entered
 */
const addRow = (expenseName, expenseCategory, expenseAmount, expenseDate) => {
  //creates a new row element
  let row = document.createElement("tr");
  //row.style.border-bottom-color =  "#ff0000";
  //creates a new column element
  let column1 = document.createElement("td");

  //create text for the column element
  const column1text = document.createTextNode(expenseName);

  //appends the text to the column element
  column1.appendChild(column1text);
  let column2 = document.createElement("td");

  const column2text = document.createTextNode(expenseCategory);
  column2.appendChild(column2text);
  let column3 = document.createElement("td");
  const column3text = document.createTextNode("$" + expenseAmount);
  column3.appendChild(column3text);

  let column4 = document.createElement("td");
  const column4text = document.createTextNode(expenseDate);
  column4.appendChild(column4text);

  let column5 = document.createElement("td");
  let btn = document.createElement("button");
  btn.innerHTML =
    '<img src="../assets/images/Vector.png" width="4.5px" height="17px">';
  btn.type = "submit";
  btn.name = "formBtn";
  btn.id = "btnn";
  btn.style = "margin: 0;";
  btn.style.background = "transparent";
  btn.addEventListener("click", function () {
    editRow(row);
  });

  const column5text = btn;
  column5.appendChild(column5text);
  //appends the first column to the new row
  row.appendChild(column1);

  //appends the second column to the new row
  row.appendChild(column2);

  row.appendChild(column3);
  row.appendChild(column4);
  row.appendChild(column5);

  // Adding new data to the front end table

  //appends the row to the table
  document.querySelector("#main-table").appendChild(row);
  let expenseValue = {
    name: expenseName,
    category: expenseCategory,
    value: expenseAmount,
    date: expenseDate,
  };
  // Backend Add Row to Database
  finalValue.push(expenseValue);
  localStorage.setItem(user, JSON.stringify(finalValue));
};

/**
 * This function will edit the row that the user wants to update an expense for.
 *
 * @param {object} row The current row that the user is editing
 */
function editRow(row) {
  openUpdate();
  document.getElementById("name_update").value = JSON.parse(
    localStorage.getItem(user)
  )[row.rowIndex - 1].name;
  document.getElementById("category_update").value = JSON.parse(
    localStorage.getItem(user)
  )[row.rowIndex - 1].category;
  document.getElementById("amount_update").value = JSON.parse(
    localStorage.getItem(user)
  )[row.rowIndex - 1].value;
  document.getElementById("date_update").value = JSON.parse(
    localStorage.getItem(user)
  )[row.rowIndex - 1].date;

  document.querySelector("#updating").addEventListener("click", () => {
    // Add elements in the Backend (add to storage) and in front end(add new row to table) and then close form

    let updatedName = document.getElementById("name_update").value;
    let updatedCategory = document.getElementById("category_update").value;
    let updatedAmount = document.getElementById("amount_update").value;
    let updatedDate = document.getElementById("date_update").value;

    // Check validity of input
    if (
      validateInput(
        updatedName,
        updatedCategory,
        updatedAmount,
        updatedDate
      ) === false
    ) {
      alert("Please fill out all fields!");
      closeUpdate();
      return;
    }

    let oldExpenses = JSON.parse(localStorage.getItem(user));

    oldExpenses[row.rowIndex - 1].name =
      document.getElementById("name_update").value;
    oldExpenses[row.rowIndex - 1].category =
      document.getElementById("category_update").value;
    oldExpenses[row.rowIndex - 1].value =
      document.getElementById("amount_update").value;
    oldExpenses[row.rowIndex - 1].date =
      document.getElementById("date_update").value;

    localStorage.setItem(user, JSON.stringify(oldExpenses));

    // Clear values in input boxes
    document.getElementById("name_update").value = "";
    document.getElementById("category_update").value = "";
    document.getElementById("amount_update").value = "";
    document.getElementById("date_update").value = "";
    closeUpdate();
  });

  document.querySelector("#deleting").addEventListener("click", () => {
    // Add elements in the Backend (add to storage) and in front end(add new row to table) and then close form
    let oldExpenses = JSON.parse(localStorage.getItem(user));

    oldExpenses.splice(row.rowIndex - 1, 1);

    localStorage.setItem(user, JSON.stringify(oldExpenses));

    // Clear values in input boxes
    document.getElementById("name_update").value = "";
    document.getElementById("category_update").value = "";
    document.getElementById("amount_update").value = "";
    document.getElementById("date_update").value = "";
    closeUpdate();
  });
}

function deleteRow() {}

let logout = document.getElementById("logout");
logout.addEventListener("click", logoutAction);
/**
 * This function will restrict the ability to use the back button and log the user out, and clear sessionStorage to indicate
 * the end of the current session.
 */
function logoutAction() {
  // alert('logout button was clicked');
  event.preventDefault();
  sessionStorage.removeItem("username");
  window.location.replace("../login_page/login_page.html");
}
