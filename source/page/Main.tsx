import {
    Button,
    DropdownButton,
    DropdownItem,
    Image,
    Ratio,
    TooltipBox
} from 'boot-cell';
import { PageProps } from 'cell-router';
import classNames from 'classnames';
import { FC } from 'web-cell';

import { WebCell_1 } from '../image';
import * as style from './Main.module.less';
import { feature, scaffold } from './data';

const Feature: FC<(typeof feature)[0] & { reverse: boolean }> = ({
    reverse,
    title,
    summary,
    link,
    logo
}) => (
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

export const MainPage: FC<PageProps> = props => (
    <main {...props}>
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
                    <Button className="me-3" variant="primary" href="#Demo">
                        在线体验
                    </Button>
                    <TooltipBox content="需先登录 GitHub">
                        <DropdownButton variant="success" caption="新建项目">
                            {scaffold.map(({ title, ...rest }) => (
                                <DropdownItem key={title} {...rest}>
                                    {title}
                                </DropdownItem>
                            ))}
                        </DropdownButton>
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
            <Ratio aspectRatio="21x9">
                <iframe
                    title="WebCell scaffold"
                    src="https://codesandbox.io/p/devbox/9gyll?embed=1&file=%2Fsrc%2FClock.tsx"
                    loading="lazy"
                    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                />
            </Ratio>
        </section>

        <div className="container">
            <h2 className="text-center display-4 mb-5">核心特性</h2>

            {feature.map((item, index) => (
                <>
                    <Feature {...item} reverse={!(index % 2)} />

                    {index + 1 < feature.length && (
                        <hr
                            className={classNames(
                                'my-5',
                                style['featurette-divider']
                            )}
                        />
                    )}
                </>
            ))}
        </div>
    </main>
);
