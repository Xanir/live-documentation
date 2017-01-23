(function() {
	var module = angular.module('live-docs');

	module.directive('compBillsTable', function() {
		return {
			restrict: 'E',
			scope: {},
			require: 'compBillsTable',
			controllerAs: 'billsTable',
			templateUrl: '/src/compBillsTable.html',
			controller: function($scope, $http) {
				var ctrl = this;

				ctrl.init = function() {
					$http.get('/data/printedBils.json')
					.then(function(response) {
						ctrl.data = response.data;
					});
				};
			},
			link: function(scope, element, attrs, ctrl) {
				ctrl.init();
			}
		};
	});

})();