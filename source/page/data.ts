export const footer = [
    {
        title: '特性',
        menu: [
            {
                title: 'API 文档',
                href: './WebCell/'
            },
            {
                title: '开源代码',
                href: 'https://github.com/EasyWebApp/WebCell'
            },
            {
                title: '路由库',
                href: 'https://github.com/EasyWebApp/cell-router/tree/v2'
            },
            {
                title: '组件库',
                href: 'https://web-cell.dev/BootCell/'
            },
            {
                title: '网络库',
                href: 'https://web-cell.dev/KoAJAX/'
            }
        ]
    },
    {
        title: '资源',
        menu: [
            {
                title: 'Web components',
                href:
                    'https://developer.mozilla.org/en-US/docs/Web/Web_Components'
            },
            {
                title: 'Custom elements',
                href:
                    'https://developers.google.cn/web/fundamentals/web-components/customelements'
            },
            {
                title: 'Shadow DOM',
                href:
                    'https://developers.google.cn/web/fundamentals/web-components/shadowdom'
            },
            {
                title: 'CSS variables',
                href:
                    'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables'
            },
            {
                title: 'ECMAScript 6+',
                href: 'http://es6-features.org/'
            },
            {
                title: 'Decorator',
                href:
                    'https://github.com/tc39/proposal-decorators/tree/master/previous#decorators'
            }
        ]
    },
    {
        title: '关于',
        menu: [
            {
                title: '上游贡献',
                href: '#Upstream'
            },
            {
                title: '开发团队',
                href: 'https://github.com/EasyWebApp'
            },
            {
                title: '关于作者',
                href: 'https://tech-query.me/'
            }
        ]
    }
];

export const header = [...footer[0].menu, ...footer[2].menu];

export const feature = [
    {
        title: 'API 扩展自 Web Components 规范',
        summary:
            'Web Components 被收录在 2018 年 W3C 发布的 HTML 5.3、DOM 4.1 标准提案，官方补丁支持 IE 11+ 等主流浏览器',
        logo: 'https://github.com/webcomponents.png',
        link: 'https://www.webcomponents.org/'
    },
    {
        title: '语法遵循 TypeScript 3、Decorator 提案 和 JSX',
        summary: '声明式组件代码，简洁、优雅，一键享受 ECMAScript 成熟提案语法',
        logo:
            'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png',
        link: 'https://www.typescriptlang.org/'
    },
    {
        title: '工具链采用零配置的 Parcel',
        summary: '项目启动分分钟，在线演示也只需一条网址',
        logo: 'https://github.com/parcel-bundler.png',
        link: 'https://parceljs.org/'
    },
    {
        title: '官方适配 MobX 状态管理库',
        summary: '一致的装饰器风格，简洁的响应式更新',
        logo: 'https://github.com/mobxjs.png',
        link: 'https://mobx.js.org/'
    },
    {
        title: '简洁的官方路由库',
        summary: '路径即状态，容器即组件',
        logo: 'https://github.com/EasyWebApp.png',
        link: 'https://github.com/EasyWebApp/cell-router/tree/v2'
    },
    {
        title: '官方组件库基于 BootStrap 4',
        summary:
            '用户界面简洁、清爽，HTML 结构规范、语义化，对 SEO、屏幕阅读器友好',
        logo: 'https://github.com/twbs.png',
        link: './BootCell/'
    },
    {
        title: '中间件模式的 HTTP 客户端',
        summary:
            'API 遵循 RESTful 规范，上传、下载进度基于 Observable 提案，并支持 ECMAScript 2018 异步迭代接口',
        logo:
            'https://raw.githubusercontent.com/github/explore/087f23463641d25ee971402fa26e3dfb2855edb9/topics/koa/koa.png',
        link: './KoAJAX/'
    }
];

export const upstream = [
    {
        org: 'webcomponents',
        repo: 'polyfills',
        issue: 88
    },
    {
        org: 'webcomponents',
        repo: 'shadydom',
        pull: 294
    },
    {
        org: 'tc39',
        repo: 'proposal-decorators',
        pull: 154
    },
    {
        org: 'babel',
        repo: 'babel',
        issue: 8808
    },
    {
        org: 'babel',
        repo: 'babel-upgrade',
        issue: 88
    },
    {
        org: 'babel',
        repo: 'babel-upgrade',
        pull: 92
    },
    {
        org: 'jsdom',
        repo: 'jsdom',
        issue: 2600
    },
    {
        org: 'jsdom',
        repo: 'w3c-xmlserializer',
        issue: 2
    },
    {
        org: 'jsdom',
        repo: 'w3c-xmlserializer',
        pull: 3
    }
];
