// Create a router instance
const router = require('express').Router();

const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/user',userRoutes);
router.use('/thought',thoughtRoutes);
// Export the router
module.exports = router;