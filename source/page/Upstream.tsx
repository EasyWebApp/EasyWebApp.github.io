import { component, mixin, createCell } from 'web-cell';
import { EdgeEvent, EdgeDetector } from 'boot-cell/source/Content/EdgeDetector';
import { GithubIssue } from 'github-web-widget/source/Issue';

import { upstream } from './data';

interface UpstreamPageState {
    list: typeof upstream;
}

@component({
    tagName: 'upstream-page',
    renderTarget: 'children'
})
export class UpstreamPage extends mixin<{}, UpstreamPageState>() {
    private pendingList = upstream.slice(2);

    state = { list: upstream.slice(0, 2) };

    showMore = ({ detail }: EdgeEvent) => {
        if (detail === 'bottom' && this.pendingList[0])
            this.setState({
                list: [...this.state.list, this.pendingList.shift()]
            });
    };

    render(_, { list }: UpstreamPageState) {
        return (
            <EdgeDetector
                className="container pt-5"
                onTouchEdge={this.showMore}
            >
                <h2 className="display-4 text-center">反哺上游生态</h2>
                <p className="lead text-center">Feedback upstream</p>

                {list.map(({ org, repo, issue, pull }) => (
                    <GithubIssue
                        owner={org}
                        repository={repo}
                        issue={issue}
                        pull={pull}
                    />
                ))}
                <p slot="bottom" className="text-center mt-2">
                    {this.pendingList[0] ? '加载更多...' : '没有更多数据了'}
                </p>
            </EdgeDetector>
        );
    }
}
