import { component, createCell, Fragment } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter } from 'cell-router/source';
import { NavBar } from 'boot-cell/source/Navigator';
import { isXDomain } from 'koajax';

import { history } from '../model';
import { header, footer } from './data';
import style from './Main.module.less';
import { WebCell_0, EasyWebApp_QQ } from '../image';

import { MainPage } from './Main';
import { UpstreamPage } from './Upstream';

@observer
@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends HTMLRouter {
    protected history = history;
    protected routes = [
        { paths: [''], component: MainPage },
        { paths: ['upstream'], component: UpstreamPage }
    ];

    renderCopyright() {
        return (
            <Fragment>
                <img title="WebCell" src={WebCell_0} className="d-block mb-2" />

                <small className="d-block mb-3 text-muted">
                    &copy; 2018 - {new Date().getFullYear()}
                    <a target="_blank" href="https://github.com/EasyWebApp">
                        EasyWebApp team
                    </a>
                </small>
                <a
                    rel="license"
                    target="_blank"
                    href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                >
                    <img
                        className="border-0"
                        alt="知识共享许可协议"
                        src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
                    />
                </a>
                <small className="d-none d-md-block">
                    <span
                        // xmlns:dct="http://purl.org/dc/terms/"
                        property="dct:title"
                        rel="dct:type"
                        href="http://purl.org/dc/dcmitype/StillImage"
                    >
                        WebCell 标识
                    </span>
                    由
                    <a
                        // xmlns:cc="http://creativecommons.org/ns#"
                        property="cc:attributionName"
                        rel="cc:attributionURL"
                        href="https://web-cell.dev/"
                    >
                        水歌 和 佳琦
                    </a>
                    采用
                    <a
                        rel="license"
                        target="_blank"
                        href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
                    >
                        知识共享 署名-非商业性使用-相同方式共享 4.0 国际
                        许可协议
                    </a>
                    进行许可。
                    <br />
                    基于
                    <a
                        // xmlns:dct="http://purl.org/dc/terms/"
                        rel="dct:source"
                        href="https://web-cell.dev/WebCell/"
                    >
                        https://web-cell.dev/WebCell/
                    </a>
                    上的作品创作。
                </small>
            </Fragment>
        );
    }

    renderFooterMenu() {
        return (
            <div className="row">
                {footer.map(({ title, menu }) => (
                    <div className="col-4 col-md">
                        <h5>{title}</h5>
                        <ul className="list-unstyled text-small">
                            {menu?.map(({ href, title }) => (
                                <li>
                                    <a
                                        className="text-muted"
                                        target={isXDomain(href) ? '_blank' : ''}
                                        href={href}
                                    >
                                        {title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }

    render() {
        return (
            <Fragment>
                <NavBar
                    narrow
                    menu={header}
                    brand={
                        <img
                            alt="WebCell"
                            src={WebCell_0}
                            style={{ width: '2rem' }}
                        />
                    }
                />
                <main className="mt-5">{super.render()}</main>

                <hr className={style['featurette-divider']} />

                <footer className="container py-5">
                    <div className="row">
                        <div className="col-6 col-md">
                            {this.renderCopyright()}
                        </div>
                        <a
                            className="col-6 col-md"
                            target="_blank"
                            href="https://jq.qq.com/?_wv=1027&amp;k=5he1Sw1"
                        >
                            <img src={EasyWebApp_QQ} title="QQ 群" />
                        </a>
                        <div className="col-12 col-md">
                            {this.renderFooterMenu()}
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}
