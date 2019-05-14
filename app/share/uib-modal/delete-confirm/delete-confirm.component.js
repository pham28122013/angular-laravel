angular
  .module('uibModal')
  .component('deleteConfirmModalComponent', {
    templateUrl: 'app/share/uib-modal/delete-confirm/delete-confirm.template.html',
    controller: 'DeleteConfirmModalController',
    controllerAs: 'dcmc',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    }
  })