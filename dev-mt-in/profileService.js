angular.module("devMtIn")
	.service("profileService", function(){ 

	this.saveProfile = function(profile) {
  	localStorage.setItem('profile', JSON.stringify(profile));
    }

    this.deleteProfile = function(profile) {
        localStorage.removeItem("profile");
    }

    this.checkForProfile = function() {
    	if (localStorage.getItem("profile")) {
    		return JSON.parse(localStorage.getItem("profile"));
    	}
    	return {
    		friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'},
    		{name: 'Zac'}, {name: 'Erin'}]
    	}
    }




});

	