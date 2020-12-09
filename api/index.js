import express from 'express';
import spaceData from './spaceData';

const router = express.Router();
const spaces = spaceData.items.reduce((obj, space) => {
  obj[space.sys.id] = space;
  return obj;
}, {});

router.get('/space', (req, res) => {
  res.send({
    spaces: spaces
  });
});

// router.get('/contests/:contestId', (req, res) => {
//   let contest = contests[req.params.contestId];
//   contest.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

//   res.send(contest);
// });

export default router;