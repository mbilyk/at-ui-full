import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';

// import { filter } from 'lodash';
// import spaceData from './spaceData';
// import userData from './userData';
// import entriesData from './entriesData';
// import assetsData from './assetsData';

const uri = 'mongodb://localhost:27017/atui';

let mdb;
MongoClient.connect(uri, (err, client) => {
  assert.equal(null, err);
  mdb = client.db('atui');
});

const router = express.Router();

// const spacesJson = spaceData.items.reduce((obj, space) => {
//   obj[space.sys.id] = space;
//   return obj;
// }, {});

// const usersJson = userData.items.reduce((obj, user) => {
//   obj[user.sys.id] = user;
//   return obj;
// }, {});

// const entriesJson = entriesData.items.reduce((obj, entry) => {
//   obj[entry.sys.id] = entry;
//   return obj;
// }, {});

// const assetsJson = assetsData.items.reduce((obj, asset) => {
//   obj[asset.sys.id] = asset;
//   return obj;
// }, {});

router.get('/space', (req, res) => {
  let spaces = {};
  let collection = mdb.collection('spaces');

  collection.find({}).sort({'sys.id':1})
    .each((err, space) => {
      assert.equal(null, err);
      if (!space) {
        res.send({
          spaces
        });
        return;
      }
      spaces[space.sys.id] = space;
    });
});

router.get('/space/:spaceId', (req, res) => {
  mdb.collection('spaces')
    .findOne({ 'sys.id': req.params.spaceId })
    .then(space => res.send(space))
    .catch(console.error);
});

router.get('/user', (req, res) => {
  let users = {};
  let collection = mdb.collection('users');

  collection.find({}).sort({'sys.id':1})
    .each((err, user) => {
      assert.equal(null, err);

      if (!user) {
        res.send({
          users
        });
        return;
      }
      users[user.sys.id] = user;
    });
});

router.get('/user/:userId', (req, res) => {
  mdb.collection('users')
    .findOne({ 'sys.id': req.params.userId })
    .then(user => res.send(user))
    .catch(console.error);
});

router.get('/space/:spaceId/entries', (req, res) => {
  let entries = {};
  let collection = mdb.collection('entries');  
  collection.find({'sys.space': req.params.spaceId}).sort({'sys.id':1})
    .each((err, entry) => {
      assert.equal(null, err);
      if (!entry) {
        res.send({
          entries
        });
        return;
      }
      entries[entry.sys.id] = entry;
    });
});

router.get('/space/:spaceId/entries/:entryId', (req, res) => {
  mdb.collection('entries')
    .findOne({ $and: [{'sys.space': req.params.spaceId},{'sys.id': req.params.entryId}] })
    .then(entry => res.send(entry))
    .catch(console.error);
});

router.get('/space/:spaceId/assets', (req, res) => {
  let assets = {};
  let collection = mdb.collection('assets');  
  collection.find({'sys.space': req.params.spaceId}).sort({'sys.id':1})
    .each((err, asset) => {
      assert.equal(null, err);
      if (!asset) {
        res.send({
          assets
        });
        return;
      }
      assets[asset.sys.id] = asset;
    });
});

router.get('/space/:spaceId/assets/:assetId', (req, res) => {
  mdb.collection('assets')
    .findOne({ $and: [{'sys.space': req.params.spaceId},{'sys.id': req.params.assetId}] })
    .then(asset => res.send(asset))
    .catch(console.error);
});

export default router;