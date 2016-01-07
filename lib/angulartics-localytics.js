(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc overview
 * @name angulartics.localytics
 * Enables analytics support for Localytics (http://localytics.com)
 */
angular.module('angulartics.localytics', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {

  $analyticsProvider.settings.pageTracking.trackRelativePath = true;

  /**
   * Register the page tracking function.
   */
  $analyticsProvider.registerPageTrack(function (path) {
    if (!window.ll) return;
    window.ll('tagScreen', path);
  });

  /**
   * Register the Localytics event tracking function with the following parameters:
   * @param {string} action Required 'action' (string) associated with the event
   * this becomes the event name
   * @param {object} properties Additional attributes to be associated with the
   * event. See http://support.localytics.com/Integration_Overview#Event_Attributes
   *
   */
  $analyticsProvider.registerEventTrack(function (action, properties) {
    if (!window.ll) return;
    if (!action) return;
    window.ll('tagEvent', action, properties);
  });


  $analyticsProvider.registerSetUsername(function (uuid) {
    if (!window.ll) return;
    window.ll('setCustomerId', uuid);
  });

  $analyticsProvider.registerSetUserProperties(function (properties) {
    if (!window.ll) return;
    if (!properties) return;
    if (properties.userName) {
      window.ll('setCustomerName', userName);
    }
    if (properties.email) {
      window.ll('setCustomerEmail', properties.email);
    }
  });


}]);

})(window, window.angular);
