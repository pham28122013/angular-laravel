angular
  .module('users')
  .service('UserService', ['$http', function ($http) {
    var self = this;
    var url = 'http://localhost:82/public/api/users';
    // var url = 'https://namcoi.com/projects/user-crud-laravel-api/public/api/users';
    self.getUsers = function getUsers() {
      return $http.get(url);
    }

    self.getUser = function getUser(id) {
      return $http.get(url + '/' + id);
    }

    self.deleteUser = function deleteUser(id) {
      return $http.delete(url + '/' + id);
    }

    self.addUser = function addUser(user) {
      return $http.post(url, user);
    }

    self.updateUser = function updateUser(user) {
      return $http.put(url + '/' + user.editUserID, user);
    }
  }])