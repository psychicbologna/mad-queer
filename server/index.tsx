import express from 'express';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import fs from 'fs';
import App from '../src/components/App';
import { HelmetProvider, Helmet } from 'react-helmet-async';

//Route declaration
// fastify.get('/', async (req, res) => {
// })

const PORT = process.env.PORT || 3000;

//fs, from Node. Reads a file and returns its content
//path: relative path of text file, may be of url type or file descriptor
//outputs result as string
const html = fs.readFileSync("dist/frontend/index.html").toString();

//Splits the html into an array of two strings at the specified spot (root div)
const parts = html.split("split");

const app = express();

/*
Server-side rendering
Improves: SEO, Performance, and 
http://expressjs.com/en/4x/api.html#app.use
app.use([path], callback [, callback...])
Mounts specified function at specified path, executed when base of requested path matches argument
http://expressjs.com/en/4x/api.html#express.static
express.static(root, [options]) - serves a static file.
    root - root directory from which to serve static assets. combines req.url with provided root directory, otherwise calls next().
    options - options
*/

const helmetContext = {}

app.use("/frontend", express.static("dist/frontend"));
app.use((req, res) => {
    res.write(parts[0]);
    const reactMarkup = (
        <StaticRouter location={req.url}>
            <HelmetProvider context={helmetContext}>
                <Helmet>
                    <title>Mad Queer Organizational Tools</title>
                </Helmet>
                <App />
            </HelmetProvider>
        </StaticRouter>
    );

    const stream = renderToNodeStream(reactMarkup);
    stream.pipe(res, { end: false });
    stream.on("end", () => {
        res.write(parts[1]);
        res.end();
    })
});

console.log(`listening on http://localhost:${PORT}`)

app.listen(PORT)