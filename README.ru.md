# bem-ng

Библиотека позволяет использовать AngularJS в бэм-проектах.

### Зависимости

- блоки i-bem и ua из [bem-core](https//github.com/bem/bem-core)
- [AngularJS Framework](https://angularjs.org/)
- [angular-ui-router](https://github.com/angular-ui/ui-router)

### Установка

Самый простой способ с полезными дополнениями это воспользоваться генератором
[generator-bem](https://github.com/verybigman/generator-bem) для Yeoman.
В репозитории имеется подробная инструкция по его установке и использованию.
Он позволит вам очень просто создавать сущности и заиметь в бэкенд
для тестирования полноценное NodeJS приложение.

Другой способ это ручное подключение по подобию с библиотеками [bem-bl](https//github.com/bem/bem-bl),
[bem-core](https//github.com/bem/bem-core) и [bem-components](https//github.com/bem/bem-components).
Используя [bower-npm-install](https://github.com/arikon/bower-npm-install) установить библиотеку из гит
репозитория или Bower регистра.

Добавить в make.js уровни для сборки блоков, после уровней bem-bl, bem-core и bem-components:

``` javascript
[ 'libs/bem-ng/common.blocks', 'libs/bem-ng/libs.blocks' ]
```

### Директивы

Написание директив происходит через моду attrs.

``` javascript
{ block: 'alert', attrs: { 'ng-show': 'form.$valid' } }
```

### Описание шаблонов

Для создания шаблонов используется блок __ng-template__, который позволяет
собирать куски BEMJSON без обертки в виде блока page.

``` javascript
({ block: 'ng-template', content: [ 'Awesome AngularJS template' ] })
```

### Отоборажение шаблонов

Вставка шаблонов происходит посредством блока __ng-view__, который позволяет
вставлять шаблоны в единственном и во множественном числе, цепляясь за состояния.

Один шаблон на странице:

``` javascript
{ block: 'ng-view' }
```

Два шаблона на странице:

``` javascript
{ block: 'ng-view', template: 'contacts' },
{ block: 'ng-view', template: 'copyright' }
```
### Сборка

Предполагается, что код AngularJS приложения пишется в директории app и использует
соглашение о модульной структуре из MEAN стека. Скелет, шаблоны, CSS и JavaScript
код внешних библиотек собирается с помощью bem-tools. Собрать само приложение можно,
например используя Gulp или Grunt. Пример рецепта для Gulp заботливо находится
[тут](https://gist.github.com/verybigman/522f9b4f0fbd08d7753d).

### Авторы

- Виноградов Антон ([verybigman](https://github.com/verybigman))

### Предложения

Все замечания и предложения пишите в [issue](https://github.com/verybigman/bem-ng/issues) на Github.

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License
