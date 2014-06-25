var bakasurStorage = angular.module('bakasur.storage', ['ngResource', 'LocalForageModule']);

bakasurStorage.config(['$localForageProvider',function($localForageProvider)	{
	 $localForageProvider.config({
        driver      : 'bakasurStorageWrapper', // if you want to force a driver
        name        : 'bakasur', // name of the database and prefix for your data
        version     : 1.0, // version of the database, you shouldn't have to use this
        storeName   : 'menulist', // name of the table
        description : 'Saving data for menulist'
    });

}]);