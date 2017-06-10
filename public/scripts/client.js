console.log('js');

// create a new angular module names "myApp"
var myApp = angular.module('myApp', []);

// add a controller to myApp

myApp.controller('AngularIntro', function() {
  var vm = this;
  vm.employeeInfo = [];
  vm.monthlyExpenditures = 0;
  vm.firstInput = '';
  vm.lastInput = '';
  vm.idInput = '';
  vm.jobInput = '';
  vm.salInput = '';

  monExpend = function() {
    var sum = 0;
    for (var i = 0; i < vm.employeeInfo.length; i++) {
      sum += vm.employeeInfo[i].annualsalary
    }
    vm.monthlyExpenditures = (sum / 12).toFixed(2);
  }

  vm.testClick = function() {
    if (vm.firstInput === '' || vm.lastInput === '' || vm.idInput === '' || vm.jobInput === '' || vm.salInput === '') {
      alert('What are you doing?');
    } else {
        var info = {
          firstname: vm.firstInput,
          lastname: vm.lastInput,
          idnumber: vm.idInput,
          jobtitle: vm.jobInput,
          annualsalary: vm.salInput
        }

          vm.firstInput = '';
          vm.lastInput = '';
          vm.idInput = '';
          vm.jobInput = '';
          vm.salInput = '';



          vm.employeeInfo.push(info);
        console.log(vm.employeeInfo);
        monExpend();
      };
  }

}); //end AngularIntro controller
/****************
after creating the module and controller, these must be connected to html
do this with ng-app and ng-controller
see index.html for reference
****************/
