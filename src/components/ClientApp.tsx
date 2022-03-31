import { hydrate } from 'react-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const helmetContext = {}
//works like render, but for containers whose contents were rendered by ReactDOMServer. Will throw a warning if there is a mismatch between the server and client.
hydrate(
  <HelmetProvider context={helmetContext}>
    <Helmet>
      <title>Mad Queer Organizational Tools</title>
    </Helmet>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root')
)
