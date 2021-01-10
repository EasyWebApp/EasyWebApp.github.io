import { createCell, Fragment, WebCellProps } from 'web-cell';
import { CellRouter } from 'cell-router/source';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { NavLink } from 'boot-cell/source/Navigator/Nav';
import { DropMenuItem } from 'boot-cell/source/Navigator/DropMenu';
import { isXDomain } from 'web-utility/source/URL';
import classNames from 'classnames';

import { history } from '../model';
import { header, footer } from './data';
import style from './Main.module.less';
import { WebCell_0, EasyWebApp_QQ } from '../image';

import { MainPage } from './Main';
import { UpstreamPage } from './Upstream';
import { CasePage } from './Case';

function Copyright() {
    return (
        <>
            <img
                className="d-block mb-2"
                style={{ maxWidth: '1.5rem' }}
                title="WebCell"
                src={WebCell_0}
            />
            <small className="d-block mb-3 text-muted">
                &copy; 2018 - {new Date().getFullYear()}
                <a
                    className="d-block"
                    target="_blank"
                    href="https://github.com/EasyWebApp"
                >
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
                    知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议
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
        </>
    );
}

function FooterList({
    className,
    menu
}: WebCellProps & Pick<typeof footer[0], 'menu'>) {
    return (
        <ul className={classNames('list-unstyled', 'text-small', className)}>
            {menu?.map(({ menu, href, title }) => (
                <li>
                    {menu ? (
                        <>
                            {title}
                            <FooterList className="pl-3" menu={menu} />
                        </>
                    ) : (
                        <a
                            className="text-muted"
                            target={isXDomain(href) ? '_blank' : ''}
                            href={href}
                        >
                            {title}
                        </a>
                    )}
                </li>
            ))}
        </ul>
    );
}

export function PageFrame() {
    return (
        <>
            <NavBar
                narrow
                menuAlign="around"
                brand={
                    <img
                        alt="WebCell"
                        src={WebCell_0}
                        style={{ width: '2rem' }}
                    />
                }
            >
                {header.map(({ menu, title, ...rest }) =>
                    menu ? (
                        <NavLink title={title}>
                            {menu.map(({ href, title }) => (
                                <DropMenuItem href={href}>{title}</DropMenuItem>
                            ))}
                        </NavLink>
                    ) : (
                        <NavLink {...rest}>{title}</NavLink>
                    )
                )}
            </NavBar>

            <CellRouter
                history={history}
                routes={[
                    { paths: [''], component: MainPage },
                    { paths: ['upstream'], component: UpstreamPage },
                    { paths: ['case'], component: CasePage }
                ]}
            />
            <hr className={style['featurette-divider']} />

            <footer className="container py-5">
                <div className="row">
                    <div className="col-6 col-md">
                        <Copyright />
                    </div>
                    <a
                        className="col-6 col-md"
                        target="_blank"
                        href="https://jq.qq.com/?_wv=1027&amp;k=5he1Sw1"
                    >
                        <img src={EasyWebApp_QQ} title="QQ 群" />
                    </a>
                    {footer.map(({ title, menu }) => (
                        <div className="col-4 col-md">
                            <h5>{title}</h5>
                            <FooterList menu={menu} />
                        </div>
                    ))}
                </div>
            </footer>
        </>
    );
}
