
const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,

} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUser);

// GET user id, PUT update user id and DELETE user by id
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;