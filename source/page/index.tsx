import { documentReady, render, createCell } from 'web-cell';

import { PageRouter } from './Router';

if ('serviceWorker' in navigator) navigator.serviceWorker.register('../sw.ts');

documentReady.then(() => render(<PageRouter />));
