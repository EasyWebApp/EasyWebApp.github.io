import { render, createCell } from 'web-cell';

import { PageMain } from './PageMain';

if ('serviceWorker' in navigator)
    window.addEventListener('load', () =>
        navigator.serviceWorker.register('../sw.ts')
    );

render(<PageMain />);
