const express = require('express');
const userController = require('../controllers/userController');
const codewarsController = require('../controllers/codewarsController');
const router = express.Router();

<<<<<<< HEAD
router.get('/user/:id', userController.getUser, (req, res) => {
  res.status(200).send(res.locals.user);
})

router.get('/users', userController.getUsers, (req, res) => {
  res.status(200).send(res.locals.users);
})

router.post('/user/create', userController.createUser, (req, res) => {
  res.status(200).send(res.locals.userinfo);
})

module.exports = router;[0]
=======
router.get(
  '/user/:id',
  userController.loadFromFacebookid, // from the passed-in facebookid, get the cw username
  codewarsController.getUser, // return codewars user data
  userController.updateUser, // update sql db with codewars user data and load user from db
  (req, res) => {
    res.status(200).send(res.locals.userSQL);
  }
);

// this router handles the codewars most recently completed challenges for the user
router.get('/challenges/:id', codewarsController.getChallenges, (req, res) => {
  res.status(200).send(res.locals.challenges);
});

router.get(
  '/users',
  userController.getUsers, //--> returns array of cw-username from db
  // codewarsController.getUsers, //--> get codewars data from api
  // userController.updateUsers, //--> update db with codewars data
  (req, res) => {
    res.status(200).send(res.locals.cwusernames);
  }
);

router.post(
  '/user/create',
  codewarsController.createUser, // grabs data from the codewars API and adds it to the req.body, which then is passed in res.locals
  userController.createUser, // actually creates a new user with all the data
  (req, res) => {
    res.status(200).send(res.locals.userinfo);
  }
);

module.exports = router;
>>>>>>> master
