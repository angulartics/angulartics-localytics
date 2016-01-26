(function(angular) {
'use strict';

/**
 * @ngdoc overview
 * @name angulartics.localytics
 * Enables analytics support for Localytics (http://localytics.com)
 */
angular.module('angulartics.localytics', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {


  /**
   * Register the page tracking function.
   */
  angulartics.waitForVendorApi('ll', 500, 't', function (ll) {
    $analyticsProvider.registerPageTrack(function (path) {
      console.log("pagetrack: " + path);
      ll('tagScreen', path);
    });
  });

  /**
   * Register the Localytics event tracking function with the following parameters:
   * @param {string} action Required 'action' (string) associated with the event
   * this becomes the event name
   * @param {object} properties Additional attributes to be associated with the
   * event. See http://support.localytics.com/Integration_Overview#Event_Attributes
   *
   */
   
  angulartics.waitForVendorApi('ll', 500, 't', function (ll) {
    $analyticsProvider.registerEventTrack(function (action, properties) {
      if (!action) return;
      ll('tagEvent', action, properties);
    });
  });


  angulartics.waitForVendorApi('ll', 500, 't', function (ll) {
    $analyticsProvider.registerSetUsername(function (uuid) {
      ll('setCustomerId', uuid);
    });
  });


  angulartics.waitForVendorApi('ll', 500, 't', function (ll) {
    $analyticsProvider.registerSetUserProperties(function (properties) {
      if (!properties) return;
      if (properties.userName) {
        ll('setCustomerName', properties.userName);
      }
      if (properties.email) {
        ll('setCustomerEmail', properties.email);
      }
    });
  });


}]);

})(angular);
