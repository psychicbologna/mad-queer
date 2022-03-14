import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//works like render, but for containers whose contents were rendered by ReactDOMServer. Will throw a warning if there is a mismatch between the server and client.
hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);