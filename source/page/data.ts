import { DropMenuItemProps } from 'boot-cell/source/Navigator/DropMenu';
import { WebCell_0 } from '../image';

export const footer = [
    {
        title: '特性',
        menu: [
            {
                title: 'API 文档',
                href: 'https://web-cell.dev/WebCell/'
            },
            {
                title: '开源代码',
                href: 'https://github.com/EasyWebApp/WebCell'
            },
            {
                title: '路由库',
                href: 'https://web-cell.dev/cell-router/'
            },
            {
                title: '组件库',
                href: 'https://bootstrap.web-cell.dev/'
            },
            {
                title: '网络库',
                href: 'https://web-cell.dev/KoAJAX/'
            },
            {
                title: '网站生成器',
                href: 'https://web-cell.dev/MarkCell/'
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
                title: 'TypeScript 4+',
                href: 'https://www.typescriptlang.org/'
            }
        ]
    },
    {
        title: '关于',
        menu: [
            {
                title: '上游贡献',
                href: 'upstream'
            },
            {
                title: '用户案例',
                href: 'case'
            },
            {
                title: '关于作者',
                href: 'https://tech-query.me/'
            }
        ]
    }
];

export const header = [...footer[0].menu, ...footer[2].menu];

export const scaffold: DropMenuItemProps[] = Object.entries({
    scaffold: '前台项目',
    DashBoard: '后台项目',
    'mark-wiki': '静态网站'
}).map(([name, title]) => ({
    title,
    target: '_blank',
    href: `https://github.com/EasyWebApp/${name}/generate`
}));

export const feature = [
    {
        title: 'API 扩展自 Web Components 规范',
        summary:
            'Web Components 被收录在 2018 年 W3C 发布的 HTML 5.3、DOM 4.1 标准提案，官方补丁支持 IE 11+ 等主流浏览器',
        logo: 'https://github.com/webcomponents.png',
        link: 'https://www.webcomponents.org/'
    },
    {
        title: '语法遵循 TypeScript 4、Decorator 提案 和 JSX',
        summary: '声明式组件代码，简洁、优雅，一键享受 ECMAScript 成熟提案语法',
        logo:
            'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png',
        link: 'https://www.typescriptlang.org/'
    },
    {
        title: '虚拟 DOM 引擎采用 SnabbDOM',
        summary: '支持 HTML 5、SVG，性能高、可靠性强，全球用量最大、Vue 同款',
        logo: 'https://github.com/snabbdom.png',
        link: 'https://github.com/snabbdom/snabbdom'
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
        summary: '路径即状态，容器即组件 —— 充分复用状态管理、组件引擎',
        logo: 'https://github.com/EasyWebApp.png',
        link: 'https://web-cell.dev/cell-router/'
    },
    {
        title: '官方组件库基于 BootStrap 4',
        summary:
            '用户界面简洁、清爽，HTML 结构规范、语义化，对 SEO、屏幕阅读器友好，一键适配 Material Design 等主题',
        logo: 'https://github.com/twbs.png',
        link: 'https://bootstrap.web-cell.dev/'
    },
    {
        title: '中间件模式的 HTTP 客户端',
        summary:
            'API 遵循 RESTful 规范，上传、下载进度基于 Observable 提案，并支持 ECMAScript 2018 异步迭代接口',
        logo:
            'https://raw.githubusercontent.com/github/explore/087f23463641d25ee971402fa26e3dfb2855edb9/topics/koa/koa.png',
        link: 'https://web-cell.dev/KoAJAX/'
    },
    {
        title: '丰富的实用工具',
        summary:
            'DOM 接口、事件、动画、URL 解析、时间格式化、国际化、数据处理等实用方法',
        logo: WebCell_0,
        link: 'https://web-cell.dev/web-utility/'
    },
    {
        title: '官方支持 MDX 语法解析',
        summary:
            'MarkDown 结合 JSX，文档更强大、更优雅，并兼容 Jekyll、Hexo、Hugo、Gatsby 元数据字段',
        logo: 'https://github.com/mdx-js.png',
        link: 'https://web-cell.dev/MarkCell/'
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
        org: 'TypeStrong',
        repo: 'ts-node',
        issue: 990
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
    },
    {
        org: 'capricorn86',
        repo: 'happy-dom',
        issue: 33
    },
    {
        org: 'snabbdom',
        repo: 'snabbdom',
        issue: 797
    },
    {
        org: 'jvanbruegge',
        repo: 'snabbdom-looks-like',
        pull: 2
    },
    {
        org: 'parcel-bundler',
        repo: 'parcel',
        issue: 4205
    },
    {
        org: 'developit',
        repo: 'microbundle',
        issue: 711
    },
    {
        org: 'slune-org',
        repo: 'ts-transform-asset',
        issue: 2
    },
    {
        org: 'slune-org',
        repo: 'ts-transform-asset',
        issue: 3
    },
    {
        org: 'BuilderIO',
        repo: 'builder',
        issue: 95
    }
];

export const cases = [
    {
        name: '成都 Web 开发者大会',
        description: 'Web developer conference of ChengDu',
        url: 'https://web-conf.dev/'
    },
    {
        name: '新冠战疫信息平台',
        description: 'COVID-19 Epidemic information platform',
        url: 'https://wuhan2020.kaiyuanshe.cn/'
    },
    {
        name: '开放黑客松平台',
        description: 'Open Hackathon platform',
        url: 'https://kaiyuanshe.cn/OpenHackathon-Web/'
    },
    {
        name: '23.5° 文化传播',
        description: '23.5° Culture Co., Ltd',
        url: 'https://in235.com/'
    }
];
