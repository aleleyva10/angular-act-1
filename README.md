

# Angular Activity 01

first, get angularjs and setup up your project:

Get your node/express project up and running
create a new angular module named "myApp"
add a controller to this app
set an ng-app in index.html to "myApp"
set an ng-controller within to your new controller
make sure you are using "controller as" syntax
test with a 2-way bind and expression
Now, move on to the project...

For your first Angularjs assignment, you will need to create an application that records employee data, including their salary. We also want to add the salaries up so we know how much we’re spending each month.

## Base Mode

weekend 1 mockup

The application should first have an input form that collects the following info about an employee:

First Name
Last name
ID Number
Job Title
Annual Salary
The form should have a submit button that

clears out the form and
stores the submitted information in client side logic
Then, that information should be appended to the DOM so the user of the application can see the information they just entered.

Finally, your logic should calculate all of the employee salaries and report back the monthly cost of all salaries.

## Hard Mode

Create a delete button for each employee that removes individual employees from the DOM. Note that in hard mode, it need not remove that Employee's salary from the reported total. Once the employee is deleted, also update the total salaries to discount the removed employee's salary.
