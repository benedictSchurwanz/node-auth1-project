const db = require('../../data/db-config.js')

/**
  resolves to an ARRAY with all users, each user having { user_id, username }
 */
function find() {
  console.log('find() from users-model.js')
  return db('users').select('id', 'username')
}

/**
  resolves to an ARRAY with all users that match the filter condition
 */
function findBy(filter) {
  return filter;
}

/**
  resolves to the user { user_id, username } with the given user_id
 */
function findById(user_id) {
  return user_id
}

/**
  resolves to the newly inserted user { user_id, username }
 */
function add(user) {
  return user
}

// Don't forget to add these to the `exports` object so they can be required in other modules
module.exports = {
  find,
  findBy,
  findById,
  add,
}
