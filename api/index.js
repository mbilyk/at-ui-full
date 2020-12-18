import express from 'express';
import spaceData from './spaceData';
import userData from './userData';

const router = express.Router();
const spaces = spaceData.items.reduce((obj, space) => {
  obj[space.sys.id] = space;
  return obj;
}, {});

const users = userData.items.reduce((obj, user) => {
  obj[user.sys.id] = user;
  return obj;
}, {});

router.get('/space', (req, res) => {
  res.send({
    spaces: spaces
  });
});

router.get('/space/:spaceId', (req, res) => {
  let space = spaces[req.params.spaceId];
  space['sys']['createdBy'] = users[space['sys']['createdBy']];
  space['sys']['updatedBy'] = users[space['sys']['updatedBy']];
  res.send(space);
});

router.get('/user/:userId', (req, res) => {
  let user = users[req.params.userId];
  res.send(user);
});

export default router;