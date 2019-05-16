import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

const hostname = '0.0.0.0';
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});