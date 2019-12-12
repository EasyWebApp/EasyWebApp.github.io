import { createCell, Fragment } from 'web-cell';
import classNames from 'classnames';
import { Button } from 'boot-cell/source/Form/Button';
import { GithubIssue } from 'github-web-widget/source/Issue';

import { PageFrame } from '../component/PageFrame';

import * as data from './data';
import { WebCell_1 } from '../image';

export function PageMain() {
    return (
        <PageFrame header={data.header} footer={data.footer}>
            <section className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <p>
                        <img title="WebCell" src={WebCell_1} />
                    </p>
                    <p className="lead font-weight-normal">
                        优雅、轻量的 Web 组件引擎
                    </p>
                    <p>让 Web 组件像细胞、蜂巢、元素一般简单而可靠</p>

                    <Button kind="secondary" outline href="#Demo">
                        即刻上手
                    </Button>
                </div>
                <div className="product-device shadow-sm d-none d-lg-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-lg-block"></div>
            </section>

            <section className="container py-5" id="Demo">
                <iframe
                    className="w-100 border-0 rounded"
                    style={{ height: '90vh' }}
                    title="WebCell scaffold"
                    src="https://codesandbox.io/embed/github/EasyWebApp/scaffold/tree/master/?autoresize=1&amp;fontsize=14&amp;hidenavigation=1&amp;module=%2Fsrc%2FClock.tsx&amp;theme=dark"
                    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                />
            </section>

            <div className="container">
                <h2 className="text-center display-4">核心特性</h2>

                {data.feature.map(({ title, summary, link, logo }, index) => (
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
                                <h2 className="featurette-heading">{title}</h2>
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

                        <hr className="featurette-divider" />
                    </Fragment>
                ))}
            </div>

            <section className="container" id="Upstream">
                <h2 className="text-center display-4">反哺上游生态</h2>

                {data.upstream.map(({ org, repo, issue, pull }) => (
                    <GithubIssue
                        owner={org}
                        repository={repo}
                        issue={issue}
                        pull={pull}
                    />
                ))}
            </section>
        </PageFrame>
    );
}
