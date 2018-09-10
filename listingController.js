angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
	  $scope.newItem = {
		coordinates: {
			latitude: 0,
			longitude: 0
		  }
	   };

	  var clear = function(){
		     $scope.newItem.name = '';
		     $scope.newItem.code = '';
		     $scope.newItem.address = '';
		     $scope.newItem.coordinates.latitude = 0;
		     $scope.newItem.coordinates.longitude = 0;
    };

	  clear();

    $scope.addListing = function() {
		var addNewItem = {
			name: $scope.newItem.name,
			code: $scope.newItem.code,
			address: $scope.newItem.address,
			coordinates: {
				latitude: $scope.newItem.coordinates.latitude,
				longitude: $scope.newItem.coordinates.longitude
			}
		}
		$scope.listings.push(addNewItem);
		clear();
	  };

    $scope.deleteListing = function(index) {
		$scope.listings.splice(index, 1);
	  };

    $scope.showDetails = function(listing) {
		$scope.detailedInfo = $scope.listings[$scope.listings.indexOf(listing)];
	  };
  }
]);
