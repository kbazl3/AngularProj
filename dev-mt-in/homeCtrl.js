angular.module("devMtIn")
	.controller("homeCtrl", function($scope, profileService) {
//a scope is a type a variable that allows you to manipulate a particular part of the html

		$scope.checkForProfile = function() {
			var profileId = JSON.parse(localStorage.getItem("profileId"));

			if (profileId) {
				profileService.checkForProfile(profileId.profileId)
				.then(function(profile) {
					$scope.myProfile = profile.data;
				})
				.catch(function(err) {
					console.error(err);
				});
			}
		}
		$scope.checkForProfile();


		$scope.saveProfile = function(profile) {
			profileService.saveProfile(profile)
		}

		$scope.deleteProfile = function() {
			profileService.deleteProfile()
			.then(function(deleteProfile) {
				localStorage.removeItem("profileId");
				$scope.myProfile = {};
			})
			.catch(function(err) {
				console.error(err);
			});
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