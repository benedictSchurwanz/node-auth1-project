const router = require('express').Router();
const { restricted } = require('../auth/auth-middleware')
const Users = require('./users-model')

router.get('/', (req, res, next) => {
  console.log("hi from get / in users-router")
  next();
})

/**
  [GET] /api/users

  This endpoint is RESTRICTED: only authenticated clients
  should have access.

  response:
  status 200
  [
    {
      "user_id": 1,
      "username": "bob"
    },
    // etc
  ]

  response on non-authenticated:
  status 401
  {
    "message": "You shall not pass!"
  }
 */

module.exports = router;
