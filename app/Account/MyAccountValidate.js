'use strict';

angular
    .module('myApp')
   
    .controller('MyAccountValidate', function() {
      var vm = this;
      const name = vm.name;
      const email = vm.email;
      const phone =  vm.phone;
      // email.$validators.validPhonenumber = function(modelValue, viewValue) {
      //   var value = modelValue || viewValue;
      //   return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value);
      // }
      vm.showVm = () => console.log('vm', vm);
      vm.formSubmit = function() {
        vm.loginForm.$setPristine();
      };
    });
   
