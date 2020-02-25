import { createCell } from 'web-cell';
import { GithubIssue } from 'github-web-widget/source/Issue';

import { upstream } from './data';

export function UpstreamPage() {
    return (
        <div className="container pt-5" id="Upstream">
            <h2 className="display-4 text-center">反哺上游生态</h2>
            <p className="lead text-center">Feedback upstream</p>

            {upstream.map(({ org, repo, issue, pull }) => (
                <GithubIssue
                    owner={org}
                    repository={repo}
                    issue={issue}
                    pull={pull}
                />
            ))}
        </div>
    );
}
