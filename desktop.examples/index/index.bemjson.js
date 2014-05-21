({
    block: 'page',
    title: 'BEM with AngularJS',
    favicon: 'favicon.ico',
    head: [{ elem: 'meta', attrs: { name: 'description', content: '' }}],
    styles: [{ elem: 'css', url: 'assets/application.min.css', ie: false }],
    attrs: {'ng-app': 'test'},
    content:[
        {
            elem: 'header',
            tag: 'header',
            content: [
                {
                    block: 'title',
                    tag: 'h2',
                    content: 'Hello, World! This page demonstrate connecting BEMHTML with AngularJS.'
                }
            ]
        },
        {
            elem: 'content',
            tag: 'main',
            attrs: { role: 'main' },
            content: [
                {
                    tag: 'p', content: 'Find this in desktop.examples/index/index.bemjson.js'
                },
                { block: 'ng-view' }
            ]
        },
        {
            elem: 'footer',
            tag: 'footer',
            content: [
                'License: ',
                {
                    block: 'link',
                    url: 'http://opensource.org/licenses/MIT',
                    content: 'MIT'
                }
            ]
        }
    ],
    scripts: [
        { elem: 'js', url: 'assets/plugins.min.js' },
        { elem: 'js', url: 'assets/application.min.js' }
    ]
})
