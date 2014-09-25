# bem-ng

This README also available in [russian](https://github.com/verybigman/bem-ng/blob/master/README.ru.md).

Library for using AngularJS in bem-projects.

### Dependencies

- i-bem and ua blocks from [bem-core](https//github.com/bem/bem-core)
- [AngularJS Framework](https://angularjs.org/)
- [angular-ui-router](https://github.com/angular-ui/ui-router)

### Install

If you want some easy way use [generator-bem](https://github.com/verybigman/generator-bem) for Yeoman.
Follow link before and read instruction for install and using it. It help you to
easy creating AngularJS essences and get NodeJS application for testing.

Another way like connecting with [bem-bl](https//github.com/bem/bem-bl),
[bem-core](https//github.com/bem/bem-core) and [bem-components](https//github.com/bem/bem-components) libraries. Use [bower-npm-install](https://github.com/arikon/bower-npm-install) to install bem-ng from GitHub or Bower register.

Add levels form bem-ng to your make.js file:

``` javascript
[ 'libs/bem-ng/common.blocks' ]
```

### Directives

Use attrs mod for writing AngularJS directives:

``` javascript
{ 
    block: 'alert', 
    attrs: { 'ng-show': 'form.$valid' } 
}
```

### Templates

Use __ng-template__ block for creating AngularJS templates on BEMJSON.

``` javascript
({ 
    block: 'ng-template', 
    content: [ 
        'Awesome AngularJS template' 
    ] 
})
```

### Rendering

Use __ng-view__ block for render AngularJS templates.

One template on page:

``` javascript
{ block: 'ng-view' }
```

Two templates on page:

``` javascript
{ block: 'ng-view', template: 'contacts' },
{ block: 'ng-view', template: 'copyright' }
```
### Build

Page skeleton, templates, CSS and JavaScript sources
from external libs will builds with [bem-tools](https://github.com/bem/bem-tools).

### Authors

- Anton Winogradov ([verybigman](https://github.com/verybigman))

### Ideas

Please, talk about your ideas by GitHub [issues](https://github.com/verybigman/bem-ng/issues).

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License
