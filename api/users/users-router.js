const router = require('express').Router();
const { restricted, checkUsernameFree, checkUsernameExists, checkPasswordLength } = require('../auth/auth-middleware')
const Users = require('./users-model')

router.get('/', restricted, (req, res, next) => {
  console.log("'get all' endpoing in users-router")
  
  Users.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(next);
})
//  This endpoint is RESTRICTED: only authenticated clients
  //  verified by restricted() middleware
//   response on non-authenticated (not logged-in, no session active)
//   status 401 { "message": "You shall not pass!" }
  //  message and status comes from restricted() middleware

module.exports = router;
