import express from 'express';
import { filter } from 'lodash';
import spaceData from './spaceData';
import userData from './userData';
import entriesData from './entriesData';
import assetsData from './assetsData';

const router = express.Router();
const spaces = spaceData.items.reduce((obj, space) => {
  obj[space.sys.id] = space;
  return obj;
}, {});

const users = userData.items.reduce((obj, user) => {
  obj[user.sys.id] = user;
  return obj;
}, {});

const entries = entriesData.items.reduce((obj, entry) => {
  obj[entry.sys.id] = entry;
  return obj;
}, {});

const assets = assetsData.items.reduce((obj, entry) => {
  obj[entry.sys.id] = entry;
  return obj;
}, {});

router.get('/space', (req, res) => {
  res.send({
    spaces: spaces
  });
});

router.get('/space/:spaceId', (req, res) => {
  let space = spaces[req.params.spaceId];
  res.send(space);
});

router.get('/user', (req, res) => {
  res.send({
    users: users
  });
});

router.get('/user/:userId', (req, res) => {
  let user = users[req.params.userId];
  res.send(user);
});

router.get('/space/:spaceId/entries', (req, res) => {
  let entriesArray = filter(entries, function(o) { return (o.sys.space == req.params.spaceId); });
  let entriesObj = {};
  entriesArray.forEach(entry => entriesObj[entry.sys.id] = entry);
  res.send(
    entriesObj
  );
});

router.get('/space/:spaceId/entries/:entryId', (req, res) => {
  let entriesArray = filter(entries, function(o) { return (o.sys.space == req.params.spaceId); });
  let entriesObj = {};
  entriesArray.forEach(entry => entriesObj[entry.sys.id] = entry);
  res.send(
    entriesObj[req.params.entryId]
  );
});

router.get('/space/:spaceId/assets', (req, res) => {
  let assetsArray = filter(assets, function(o) { return (o.sys.space == req.params.spaceId); });
  let assetsObj = {};
  assetsArray.forEach(asset => assetsObj[asset.sys.id] = asset);
  res.send(
    assetsObj
  );
});

router.get('/space/:spaceId/assets/:assetId', (req, res) => {
  let assetsArray = filter(assets, function(o) { return (o.sys.space == req.params.spaceId); });
  let assetsObj = {};
  assetsArray.forEach(asset => assetsObj[asset.sys.id] = asset);
  res.send(
    assetsObj[req.params.assetId]
  );
});

export default router;