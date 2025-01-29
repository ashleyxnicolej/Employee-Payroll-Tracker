// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeeArray = [];


// Collect employee data
const collectEmployees = function () {
  let continueForm = true; // enables form to continue if 'confirm' is pressed (which = 'true')
  while (continueForm) {      // enables form to continuously loop (while loop) to enter more than one employee
    const firstName = prompt(`Please enter employee first name.`);
    if (!firstName) break;    // Exit if no input

    const lastName = prompt(`Please enter employee last name.`);
    if (!lastName) break;     // Exit if no input

    const employeeSalary = prompt(`Please enter employee annual salary.`);
    if (!employeeSalary || isNaN(employeeSalary)) break;  // Exit if no input or not a number

    const employeeInfo = {
      firstName: firstName,
      lastName: lastName,
      salary: employeeSalary
    };

    employeeArray.push(employeeInfo);

    continueForm = confirm('Would you like to enter another employee?');  // set as boolean (if they press 'confirm' = true, and will be sent back to beginning of form to enter more employees)
    console.log(continueForm);
  }

  console.log('employeeArray', employeeArray);
  return(employeeArray);
  // if (employeeArray.length > 0) {
  //   console.log(employeeArray);
  //   displayAverageSalary(employeeArray);  // Call displayAverageSalary with the collected employee data

  //   Call getRandomEmployee with the collected employee data and log the result
  //   const randomEmployee = getRandomEmployee(employeeArray);
  // } else {
  //   console.log("No employees were entered.");
  // }
};

// Display the average salary
const displayAverageSalary = function (employeeArray) {
  if (employeeArray.length === 0) {
    console.log("No employees to calculate the average salary.");
    return;
  }

  // Calculate the total salary
  const totalSalary = employeeArray.reduce((sum, employee) => sum + parseFloat(employee.salary), 0); 
  
  // Calculate the average salary and format it to two decimal places
  const averageSalary = (totalSalary / employeeArray.length).toFixed(2);

  // Display the average salary
  console.log(`The average employee salary between our ${employeeArray.length} employee(s) is $${averageSalary}`);
};

// Select a random employee
const getRandomEmployee = function (employeeArray) {
  // Generate a random index based on the length of the array
  const randomIndex = Math.floor(Math.random() * employeeArray.length);

  // Return the employee at the random index
  const randomEmployee = employeeArray [randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
};

// Attach the collectEmployees function to the button click event


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
