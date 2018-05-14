'use strict';

angular
  .module('myApp')
   
    .controller('MyAccountValidate', function() {
      var vm = this;
      const name = vm.name;
      const email = vm.email;
      const phone =  vm.phone;
    
      vm.formSubmit = function() {
        vm.loginForm.$setPristine();
      };
    });
    
   
