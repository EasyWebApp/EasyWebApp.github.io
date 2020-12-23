import { createCell, Fragment } from 'web-cell';
import classNames from 'classnames';
import { Button } from 'boot-cell/source/Form/Button';
import { TooltipBox } from 'boot-cell/source/Prompt/Tooltip';
import { DropMenu, DropMenuItem } from 'boot-cell/source/Navigator/DropMenu';
import { Embed } from 'boot-cell/source/Media/Embed';
import { Image } from 'boot-cell/source/Media/Image';

import { scaffold, feature } from './data';
import style from './Main.module.less';
import { WebCell_1 } from '../image';

function Feature({
    reverse,
    title,
    summary,
    link,
    logo
}: typeof feature[0] & { reverse: boolean }) {
    return (
        <section
            className={classNames(
                'row',
                'align-items-end',
                reverse && 'flex-row-reverse'
            )}
        >
            <div className="col-md-10">
                <h2 className={style['featurette-heading']}>{title}</h2>
                <p className="lead">{summary}</p>
            </div>
            <a className="col-md-2" target="_blank" href={link}>
                <Image fluid className={style['featurette-logo']} src={logo} />
            </a>
        </section>
    );
}

export function MainPage() {
    return (
        <>
            <section className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <p>
                        <img title="WebCell" src={WebCell_1} />
                    </p>
                    <p className="lead font-weight-normal">
                        优雅、轻量的 Web 组件引擎
                    </p>
                    <p>让 Web 组件像细胞、蜂巢、元素一般简单而可靠</p>

                    <div className="mt-4">
                        <Button className="mr-3" color="primary" href="#Demo">
                            在线体验
                        </Button>
                        <TooltipBox text="需先登录 GitHub">
                            <DropMenu buttonColor="success" caption="新建项目">
                                {scaffold.map(({ title, ...rest }) => (
                                    <DropMenuItem {...rest}>
                                        {title}
                                    </DropMenuItem>
                                ))}
                            </DropMenu>
                        </TooltipBox>
                    </div>
                </div>
                <div
                    className={`${style['product-device']} shadow-sm d-none d-lg-block`}
                />
                <div
                    className={`${style['product-device']} ${style['product-device-2']} shadow-sm d-none d-lg-block`}
                />
            </section>

            <section className="container py-5" id="Demo">
                <Embed
                    is="iframe"
                    title="WebCell scaffold"
                    src="https://codesandbox.io/embed/webcell-demo-9gyll?autoresize=1&amp;fontsize=14&amp;hidenavigation=1&amp;module=%2Fsrc%2FClock.tsx&amp;theme=dark"
                    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                />
            </section>

            <div className="container">
                <h2 className="text-center display-4 mb-5">核心特性</h2>

                {feature.map((item, index) => (
                    <>
                        <Feature {...item} reverse={!(index % 2)} />

                        {index + 1 < feature.length ? (
                            <hr
                                className={classNames(
                                    'my-5',
                                    style['featurette-divider']
                                )}
                            />
                        ) : null}
                    </>
                ))}
            </div>
        </>
    );
}
