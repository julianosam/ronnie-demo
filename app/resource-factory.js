(function() {
    'use strict';
	
	angular
	    .module('angularjs.sg')
	    .factory('Item', Item);

	Item.$inject = ['$resource'];

	function Item($resource){

		return $resource('/api/items/:id');
		
	}

})();