import { DropdownItem, NavDropdown, NavLink, OffcanvasNavbar } from 'boot-cell';
import { createRouter } from 'cell-router';
import classNames from 'classnames';
import { FC, WebCellProps } from 'web-cell';
import { isXDomain } from 'web-utility';

import { EasyWebApp_QQ, WebCell_0 } from '../image';
import { CasePage } from './Case';
import { MainPage } from './Main';
import * as style from './Main.module.less';
import { UpstreamPage } from './Upstream';
import { footer, header } from './data';

const Copyright: FC = () => (
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
                // @ts-ignore
                property="dct:title"
                rel="dct:type"
                href="http://purl.org/dc/dcmitype/StillImage"
            >
                WebCell 标识
            </span>
            由
            <a
                // xmlns:cc="http://creativecommons.org/ns#"
                // @ts-ignore
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

const FooterList: FC<WebCellProps & Pick<(typeof footer)[0], 'menu'>> = ({
    className,
    menu
}) => (
    <ul className={classNames('list-unstyled', 'text-small', className)}>
        {menu?.map(({ menu, href, title }) => (
            <li key={href}>
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

const { Route } = createRouter();

export const PageFrame: FC = () => (
    <>
        <OffcanvasNavbar
            variant="dark"
            expand="md"
            sticky="top"
            brand={
                <img alt="WebCell" src={WebCell_0} style={{ width: '2rem' }} />
            }
        >
            {header.map(({ menu, title, href }) =>
                menu ? (
                    <NavDropdown className="mx-3" key={title} title={title}>
                        {menu.map(({ href, title }) => (
                            <DropdownItem
                                target={
                                    href?.startsWith('http') ? '_top' : '_self'
                                }
                                href={
                                    href?.startsWith('http') ? href : `#${href}`
                                }
                            >
                                {title}
                            </DropdownItem>
                        ))}
                    </NavDropdown>
                ) : (
                    <NavLink
                        className="m-3 my-md-0 mx-md-3"
                        key={href}
                        target={href?.startsWith('http') ? '_top' : '_self'}
                        href={href?.startsWith('http') ? href : `#${href}`}
                    >
                        {title}
                    </NavLink>
                )
            )}
        </OffcanvasNavbar>

        <div className="flex-fill overflow-auto scrollbar-none">
            <Route path="" component={MainPage} />
            <Route path="upstream" component={UpstreamPage} />
            <Route path="case" component={CasePage} />
        </div>
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
                    <div className="col-4 col-md" key={title}>
                        <h5>{title}</h5>
                        <FooterList menu={menu} />
                    </div>
                ))}
            </div>
        </footer>
    </>
);
