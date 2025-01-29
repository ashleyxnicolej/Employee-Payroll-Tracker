# Employee-Payroll-Tracker
An application that enables a payroll manager to view and manage employee payroll data. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that is written. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

## User Story

```md
AS A payroll manager
I WANT AN employee payroll tracker
SO THAT I can see my employees' payroll data and properly budget for the company
```

## Acceptance Criteria

```md
GIVEN an employee payroll tracker
WHEN I click the "Add employee" button
THEN I am presented with a series of prompts asking for first name, last name, and salary
WHEN I finish adding an employee
THEN I am prompted to continue or cancel
WHEN I choose to continue
THEN I am prompted to add a new employee
WHEN I choose to cancel
THEN my employee data is displayed on the page sorted alphabetically by last name, and the console shows computed and aggregated data
```

## Grading Requirements

This Challenge is graded based on the following criteria:

### Function to Collect Employees 40%

* The `collectEmployees()` function must do the following:

  * creates a new employee object by collecting first name, last name, and salary using `prompt()` (20 points)

  * creates multiple employee objects by collecting first name, last name, and salary for each employee using `prompt()` and `confirm()` (20 points)

### Function to Display Average Salary 30%

* The `displayAverageSalary()` function must do the following:

  * calculates the average salary and logs "The average employee salary between our <numberOfEmployees> employee(s) is $<averageSalaryWithTwoDecimals>" when given salaries with no decimals (15 points)

  * calculates the average salary and logs "The average employee salary between our <numberOfEmployees> employee(s) is $<averageSalaryWithTwoDecimals>" when given salaries with decimals (15 points)

### Function to Choose a Random Drawing Winner 30%

* The `getRandomEmployee()` function should do the following:

  * chooses an employee at random and logs "Congratulations to <employeeFirstName> <employeeLastName>, our random drawing winner!" (15 points)

  * random selection method should allow for all employees to be chosen in the drawing (15 points)

