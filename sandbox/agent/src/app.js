import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));

/** 
 * @route GET /list-files
 * @description List all the files in the WORKDIR directory recursively and return array of string(file paths) eg.
 * [
 * "next.config.mjs",
 * "src/app/page.jsx",
 * "src/app/layout.jsx",
 * "src/app/globals.css",
 * ]
 * this exclude directories like node_modules, .git, dist, build, etc.
 */

async function listFiles(dir) {
    let results = [];
    const list
}

app.get('/list-files', async (req, res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to list files' });
    }
});

/**
 * @route GET /read-files
 * @description Read all the files provided in the query parameter "files" and return an object with file paths as keys and their content as values eg.
 * {
 * "next.config.mjs": "content of next.config.mjs",
 * "src/app/page.jsx": "content of page.jsx",
 * }
 * if any file is not found, return 404 with message "File not found: <file path>"
 */

app.get('/read-files', async (req, res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to read files' });
    }
});

export default app;