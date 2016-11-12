function StaffController() {
  this.name = 'StaffName';
  this.email = 'staffemail@email.com';
  this.phone = '222-555-5555'
}

angular
  .module('app')
  .controller('StaffController', StaffController);