const Router = require('express');
const router = new Router();
const controller = require('./authController');
const { check } = require('express-validator');

router.post(
  '/register',
  [check('email', 'invalid email').notEmpty(), check('password', 'invalid password').isLength({ min: 3, max: 16 })],
  controller.register
);
router.post('/login', controller.login);

module.exports = router;
