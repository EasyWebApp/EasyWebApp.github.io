import { createCell } from 'web-cell';
import { CommandLine, GithubRepository, GithubIssue } from 'github-web-widget';

import { PageFrame } from '../component/PageFrame';

import data from './index.json';
import {
    Web_Components,
    ECMAScript,
    Material_Design,
    WebCell_1
} from '../image';

const HeadNav = [
    { title: 'API 文档', href: 'https://web-cell.dev/WebCell/' },
    {
        title: '开源代码',
        href: 'https://github.com/EasyWebApp/WebCell/tree/v2'
    },
    { title: '组件库', href: 'https://web-cell.dev/BootCell/' },
    { title: '上游贡献', href: '#Upstream' },
    { title: '开发团队', href: 'https://github.com/EasyWebApp' },
    { title: '关于作者', href: 'https://tech-query.me/' }
];

export function PageMain() {
    return (
        <PageFrame header={HeadNav} footer={data.menu}>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <p>
                        <img title="WebCell" src={WebCell_1} />
                    </p>
                    <p className="lead font-weight-normal">
                        优雅、轻量的 Web 组件引擎
                    </p>
                    <p>让 Web 组件像细胞、蜂巢、元素一般简单而可靠</p>
                    <a
                        className="btn btn-outline-secondary"
                        href={HeadNav[0].href}
                    >
                        即刻上手
                    </a>
                </div>
                <div className="product-device shadow-sm d-none d-lg-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-lg-block"></div>
            </div>

            <div id="Repository">
                <CommandLine>
                    npm init web-cell path/to/your_project
                </CommandLine>

                <GithubRepository owner="EasyWebApp" repository="WebCell" />
            </div>

            <div className="container marketing">
                <div className="row">
                    <div className="col-lg-4">
                        <i className="fas fa-chart-line fa-9x text-success" />
                        <h2>学习曲线平滑</h2>
                        <p className="text-lg-left">
                            组件语法完全遵循 HTML 5、CSS 3、JavaScript，API
                            完全基于 DOM 封装、扩展。
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <i className="fas fa-database fa-9x text-primary" />
                        <h2>数据驱动视图</h2>
                        <p className="text-lg-left">
                            基于“表达式求值”的异步增量更新机制实现 MVVM。
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <i className="fas fa-toolbox fa-9x text-danger" />
                        <h2>工具链零配置</h2>
                        <p className="text-lg-left">
                            官方维护一键开发工具，也兼容 webpack 等流行工具。
                        </p>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                            API 扩展自
                            <br />
                            Web Components 规范
                        </h2>
                        <p className="lead">
                            Web Components 被收录在 2019 年 W3C 正式发布的
                            <br />
                            HTML 5.3、DOM 4.1 标准，官方补丁支持 IE 11+
                            等主流浏览器。
                        </p>
                    </div>
                    <div
                        className="col-md-5 background-image"
                        style={{ backgroundImage: `url(${Web_Components})` }}
                    ></div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">
                            语法遵循
                            <br />
                            ECMAScript 2018
                            <br />
                            和“装饰器”提案
                        </h2>
                        <p className="lead">逻辑代码简洁、优雅</p>
                    </div>
                    <div
                        className="col-md-5 background-image"
                        style={{ backgroundImage: `url(${ECMAScript})` }}
                    ></div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                            官方组件库封装自
                            <br />
                            Google Material Design
                        </h2>
                        <p className="lead">
                            用户界面清爽、灵动，
                            <br />
                            接口遵循 HTML “渐进增强、优雅降级”原则。
                        </p>
                    </div>
                    <div
                        className="col-md-5 background-image"
                        style={{ backgroundImage: `url(${Material_Design})` }}
                    ></div>
                </div>

                <hr className="featurette-divider" />
            </div>

            <section id="Upstream">
                <h2 className="text-center display-4">反哺上游生态</h2>
                <div className="container">
                    {data.upstream.map(({ org, repo, issue, pull }) => (
                        <GithubIssue
                            owner={org}
                            repository={repo}
                            issue={issue}
                            pull={pull}
                        />
                    ))}
                </div>
            </section>
        </PageFrame>
    );
}
