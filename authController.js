const User = require('./module/User');
const Role = require('./module/Role');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');

const generateAccessToken = (id, roles) => {
  const payLoad = {
    id,
    roles,
  };
  return jwt.sign(payLoad, secret, { expiresIn: '48h' });
};

class authController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) return res.json({ message: `user ${email} doesn't exist` });

      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword) return res.json({ message: `Incorrect password` });

      const token = generateAccessToken(user._id, user.roles);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.json({ message: 'PI' });
    }
  }
  async register(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) return res.json({ message: 'PI DOR' });

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) return res.json({ message: 'user already exists' });

      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: 'USER' }); // ТУТ ПОМЕНЯЬ РЛЬ

      const user = new User({ email, password: hashPassword, roles: [userRole.value] });
      await user.save();
      return res.json({ message: 'Success' });
    } catch (e) {
      res.json({ message: 'DARAS' });
    }
  }
}

module.exports = new authController();
