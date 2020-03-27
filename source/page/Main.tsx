import { createCell, Fragment } from 'web-cell';
import classNames from 'classnames';
import { Button } from 'boot-cell/source/Form/Button';
import { TooltipBox } from 'boot-cell/source/Prompt/Tooltip';
import { DropMenu } from 'boot-cell/source/Navigator';

import { scaffold, feature } from './data';
import style from './Main.module.less';
import { WebCell_1 } from '../image';

export function MainPage() {
    return (
        <Fragment>
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
                        <Button className="mr-3" href="#Demo">
                            在线体验
                        </Button>
                        <TooltipBox text="需先登录 GitHub">
                            <DropMenu
                                buttonKind="success"
                                title="新建项目"
                                list={scaffold}
                            />
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
                <iframe
                    className="w-100 border-0 rounded"
                    style={{ height: '90vh' }}
                    title="WebCell scaffold"
                    src="https://codesandbox.io/embed/webcell-demo-9gyll?autoresize=1&amp;fontsize=14&amp;hidenavigation=1&amp;module=%2Fsrc%2FClock.tsx&amp;theme=dark"
                    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                />
            </section>

            <div className="container">
                <h2 className="text-center display-4">核心特性</h2>

                {feature.map(({ title, summary, link, logo }, index) => (
                    <Fragment>
                        <section
                            className={classNames(
                                'd-flex',
                                'align-items-center',
                                'justify-content-between',
                                index % 2 && 'flex-row-reverse'
                            )}
                        >
                            <div>
                                <h2 className={style['featurette-heading']}>
                                    {title}
                                </h2>
                                <p className="lead">{summary}</p>
                            </div>
                            <a
                                className="w-25 mx-3"
                                target="_blank"
                                href={link}
                            >
                                <img className="img-fluid" src={logo} />
                            </a>
                        </section>

                        {index + 1 < feature.length ? (
                            <hr className={style['featurette-divider']} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
        </Fragment>
    );
}
