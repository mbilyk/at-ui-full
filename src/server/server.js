import express from 'express';
import apiRouter from '../../api';

import serverRender from './serverRender';
import config from './config';

const server = express();
server.use(express.static('dist'));

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