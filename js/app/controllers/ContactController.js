function ContactController() {
  this.name = 'Name';
  this.email = 'email@email.com';
  this.phone = '555-555-5555'

  var vm = this;

  this.changeName = function() {
    vm.name = 'New Name'
  }

  this.changeEmail = function() {
    vm.email = 'newemail@email.com'
  }

  this.changePhone = function() {
    vm. phone = '444-444-4444'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);