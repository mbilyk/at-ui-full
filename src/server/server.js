import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import apiRouter from '../../api';
import serverRender from './serverRender';
import config from './config';

const server = express();
server.use(express.static('dist'));

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  serverRender(req.params.spaceId)
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);
});

server.use('/api', apiRouter);

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});