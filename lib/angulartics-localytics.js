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
    if (!window.localytics) return;
    window.localytics.tagScreen(path);
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
    if (!window.localytics) return;
    if (!action) return;
    window.localytics.tagEvent(action, properties);
  });

}]);

})(window, window.angular);
