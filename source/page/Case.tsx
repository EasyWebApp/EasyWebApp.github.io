import { createCell, Fragment } from 'web-cell';
import classNames from 'classnames';
import { Embed } from 'boot-cell/source/Media/Embed';

import style from './Case.module.less';
import { cases } from './data';

function Case({
    name,
    description,
    url,
    reverse
}: typeof cases[0] & { reverse: boolean }) {
    return (
        <section
            className={
                'col-12 col-md-6 my-3 my-md-0 pt-3 px-3 pt-md-5 px-md-5 text-center position-relative ' +
                (reverse ? 'bg-light' : 'bg-dark text-white')
            }
        >
            <div className="my-3 py-3">
                <h2 className="display-5">{name}</h2>
                <p className="lead">{description}</p>
            </div>
            <Embed
                is="iframe"
                className={classNames(
                    `bg-${reverse ? 'dark' : 'light'}`,
                    'shadow-sm',
                    'mx-auto',
                    style.preview
                )}
                scrolling="no"
                src={url}
            />
            <a className="stretched-link" target="_blank" href={url} />
        </section>
    );
}

export function CasePage() {
    return (
        <>
            <h2 className="display-4 text-center pt-5">用户案例</h2>
            <p className="lead text-center">User cases</p>

            <div className="row w-100 m-0">
                {cases.map((item, index) => {
                    const odd = index % 2;
                    const order = Math.ceil((index + 1) / 2) % 2 ? !!odd : !odd;

                    return <Case {...item} reverse={order} />;
                })}
            </div>
        </>
    );
}
