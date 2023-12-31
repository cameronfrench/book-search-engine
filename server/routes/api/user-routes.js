const router = require('express').Router();
const {
  addUser,
  findUser,
  saveBook,
  removeBook,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(addUser).put(authMiddleware, saveBook);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, findUser);

router.route('/books/:bookId').delete(authMiddleware, removeBook);

module.exports = router;
