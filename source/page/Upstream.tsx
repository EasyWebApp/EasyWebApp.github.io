import { ScrollBoundary, TouchHandler } from 'boot-cell';
import { GithubIssue } from 'github-web-widget';
import { observable } from 'mobx';
import { component, observer } from 'web-cell';

import { upstream } from './data';

@component({ tagName: 'upstream-page' })
@observer
export class UpstreamPage extends HTMLElement {
    private pendingList = upstream.slice(2);

    @observable
    accessor list = upstream.slice(0, 2);

    showMore: TouchHandler = edge => {
        if (edge === 'bottom' && this.pendingList[0])
            this.list = [...this.list, this.pendingList.shift()];
    };

    render() {
        const { list } = this;

        return (
            <ScrollBoundary className="container pt-5" onTouch={this.showMore}>
                <h2 className="display-4 text-center">反哺上游生态</h2>
                <p className="lead text-center">Feedback upstream</p>

                {list.map(({ org, repo, issue, pull }) => (
                    <GithubIssue
                        key={org + repo + issue + pull}
                        owner={org}
                        repository={repo}
                        issue={issue}
                        pull={pull}
                    />
                ))}
                <p slot="bottom" className="text-center mt-2">
                    {this.pendingList[0] ? '加载更多...' : '没有更多数据了'}
                </p>
            </ScrollBoundary>
        );
    }
}
