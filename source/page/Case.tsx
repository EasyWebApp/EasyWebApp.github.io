import { createCell, Fragment } from 'web-cell';
import classNames from 'classnames';
import { IFrame } from 'boot-cell/source/Content/IFrame';

import style from './Case.module.less';
import { cases } from './data';

const list = cases.reduce((list, item, index) => {
    if (index % 2 === 0) list.push([item]);
    else list.slice(-1)[0].push(item);

    return list;
}, [] as typeof cases[]);

function Case({
    name,
    description,
    url,
    reverse
}: typeof cases[0] & { reverse: boolean }) {
    return (
        <section
            className={
                'flex-md-grow-1 mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center position-relative ' +
                (reverse ? 'bg-light' : 'bg-dark text-white')
            }
        >
            <div className="my-3 py-3">
                <h2 className="display-5">{name}</h2>
                <p className="lead">{description}</p>
            </div>
            <IFrame
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
        <Fragment>
            <h2 className="display-4 text-center pt-5">用户案例</h2>
            <p className="lead text-center">User cases</p>

            {list.map((row, index) => {
                const odd = index % 2;

                return (
                    <div className="d-md-flex w-100 my-md-3 pl-md-3">
                        {row.map((item, index) => {
                            const right = index % 2;
                            const order = odd ? !!right : !right;

                            return <Case {...item} reverse={order} />;
                        })}
                    </div>
                );
            })}
        </Fragment>
    );
}
