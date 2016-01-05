## angulartics-localytics

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url] [![Join the Slack chat][slack-image]][slack-url]

Localytics plugin for [Angulartics](http://github.com/luisfarzati/angulartics).

## Important Note
This plugin has no maintainers at the moment. If you use Localytics and want to contribute with code/documentation/examples and become an active maintainer of this project, please [let us know](https://github.com/angulartics/angulartics-localytics/issues/new?title=I+want+to+join+as+maintainer).

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/luisfarzati/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-localytics
```

Then add `angulartics.localytics` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics',
  require('angulartics-localytics')
]);
```

> Please note that core Angulartics doesn't export the name yet, but it will once we move it into [the new organization](http://github.com/angulartics).

### bower

```shell
bower install gemr/angulartics-localytics
```

Add this `<script>` to your `index.html`:

```html
<script>
    +function(l,y,t,i,c,s) {
        l['LocalyticsGlobal'] = i;
        l[i] = function() { (l[i].q = l[i].q || []).push(arguments) };
        l[i].t = +new Date;
        (s = y.createElement(t)).type = 'text/javascript';
        s.src = '//web.localytics.com/v3/localytics.min.js';
        (c = y.getElementsByTagName(t)[0]).parentNode.insertBefore(s, c);
        ll('init', 'YOUR-LOCALYTICS-APP-KEY', {} /* Options */);
    }(window, document, 'script', 'll');
</script>
```

Then add `angulartics.localytics` as a dependency for your app:

```javascript
angular.module('myApp', [
  'angulartics',
  'angulartics.localytics'
]);
```

## Documentation

### User tracking
For user tracking, the angulartics setUsername field must be a user id for localytics.  For user properties, localytics accepts an email address and an username only. 

```javascript
$analytics.setUsername(userId)
$analytics.setUserProperties({ email: EMAILADDRESS, username: USERNAME});
```

Addtional documentation is available on the [Angulartics site](http://luisfarzati.github.io/angulartics).

## Development

```shell
npm run build
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/angulartics-localytics.svg
[npm-url]: https://npmjs.org/package/angulartics-localytics
[npm-downloads-image]: https://img.shields.io/npm/dm/angulartics-localytics.svg
[npm-downloads-url]: https://npmjs.org/package/angulartics-localytics
[bower-image]: https://img.shields.io/bower/v/angulartics-localytics.svg
[bower-url]: http://bower.io/search/?q=angulartics-localytics
[dep-status-image]: https://img.shields.io/david/angulartics/angulartics-localytics.svg
[dep-status-url]: https://david-dm.org/angulartics/angulartics-localytics
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
[slack-image]: https://angulartics.herokuapp.com/badge.svg
[slack-url]: https://angulartics.herokuapp.com
