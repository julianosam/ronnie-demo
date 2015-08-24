(function() {
    'use strict';
	
	angular
	    .module('angularjs.sg')
	    .controller('AppCtrl', AppCtrl);

	AppCtrl.$inject = ['$log', '$scope', 'Item'];

	function AppCtrl($log, $scope, Item){

		var vm = this;		
		vm.newItem = new Item({});

		///// GET all items
		///////vm.itemList = Item.get();
		vm.itemList = [
			{field1: 'Field 1', field2: 'Field 2', field3: 'Field 3', field4: 'Field 4'},
			{field1: 'Field 1', field2: 'Field 2', field3: 'Field 3', field4: 'Field 4'},
			{field1: 'Field 1', field2: 'Field 2', field3: 'Field 3', field4: 'Field 4'}
		];


		// Pushes a new item to the list
		vm.pushItem = function(){

			// POST call to save item
			// $log.debug('Saving item...');					
			// vm.newItem.$save(function(res){

			// 	$log.debug('Success!');
			// 	vm.itemList.push(vm.newItem);
			// 	vm.newItem = new Item({});
			// });
			
			
			vm.itemList.push(vm.newItem);
			vm.newItem = new Item({});
		};

	}
	    
})();