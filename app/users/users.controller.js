angular
  .module('users')
  .controller('UsersController', ['$http', 'UserService', function ($http, UserService) {
    var self = this;
    var url = 'http://localhost:82/public/api/users';
    self.$onInit = function () {
      self.userForm = {};
      self.userForm.status = false;
      self.userForm.edit = false;
      self.userForm.show = false;
      self.data = ['name','age'];
      UserService.getUsers().then(function (response) {
        self.users = response.data.users;
      });
    };
      self.onGetAJAX = function () {
      $http
        .get('http://localhost:82/public/api/users')
        .then(function (response) {
          //  console.log(response);
          self.users = response.data;
          // console.log(self.users);
          // var a = 5;
        });
      }
      
      
    
      // self.onGetAJAX();
  
  self.onDelete = function (id) {
    console.log(id);
    $http.delete('http://localhost:82/public/api/users/' + id).then(function(response){
      console.log(response);
      if (response.data === "ok") {
      //   UserService.getUsers().then(function (response) {
      //   self.users = response.data.users;
      // });
      $http
      .get('http://localhost:82/public/api/users')
      .then(function (response) {
        self.users = response.data;
      });
      }
    });
    // return self.deleteUser;
    //  var userID = id;
    //  self.userID = deleteUser('id');
    //  self.users = destroy.data.userID; 
  }

  self.onCreateAnUserClick = function () {
    self.userForm.status = true;
    self.userForm.edit = false;
    self.userForm.name = '';
    self.userForm.email = '';
    self.userForm.password = '';
  }
   
  self.onEditButtonClick = function (user) {
    self.userForm.status = true;
    self.userForm.edit = true;
    self.userForm.editUserID = user.id;
    self.userForm.name = user.name;
    self.userForm.email = user.email;
    self.userForm.password = user.password;
  };
  self.onshow = function (user) {
   
    
      self.userForm.status = true;
    self.userForm.show = true;
    self.userForm.editUserID = user.id;
    self.userForm.name = user.name;
    self.userForm.email = user.email;
    self.userForm.password = user.password;
    
  };
  
    // self.onGetAJAX = function () {
    //   $http
    //     .get('http://localhost:81/public/api/users')
    //     .then(function (response) {
    //       //  console.log('aaa');
    //       self.users = response.data.users;

    //     });
    // }

   

  }]);