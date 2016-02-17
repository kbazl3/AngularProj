angular.module("devMtIn")
	.service("profileService", function($http){ 

	this.saveProfile = function(profile) {
        return $http({
            method: 'POST', // Request method.
            url: baseUrl + 'api/profiles/', // URL we are making the request to.
           data: profile // The data we are requesting be posted.
          })
          .then(function(profileResponse) {
            localStorage.setItem("profileId", JSON.stringify({ profileId: profileResponse.data._id}));
            console.log(profileResponse)
          })
          .catch(function(err) {
            console.error(err);
          });
    }


    this.deleteProfile = function() {
        var profileId = JSON.parse(localStorage.getItem("profileId")).profileId;

        return $http({
            method: 'DELETE',
            url: baseUrl + "api/profiles/" + profileId
        });
        
    }

    this.checkForProfile = function(profileId) {
        return $http({
            method: "Get",
            url: baseUrl + "api/profiles/" + profileId
        });
    }

    var baseUrl = "http://connections.devmounta.in/";




});

	