angular.module("devMtIn")
	.controller("homeCtrl", function($scope, profileService) {
//a scope is a type a variable that allows you to manipulate a particular part of the html

		$scope.myProfile = profileService.checkForProfile();

		$scope.saveProfile = function(profile) {
			profileService.saveProfile(profile)
		}

		$scope.deleteProfile = function(profile) {
			profileService.deleteProfile(profile);
		}


		$scope.sortOptions=[{
			display: "Ascending",
			value: false
		},
		{
			display: "Descending",
			value: true
		}
		];

		$scope.editing = false;

	});