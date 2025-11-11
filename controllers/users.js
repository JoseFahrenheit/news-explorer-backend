const User = require('../models/User');

const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({
      email: user.email,
      name: user.name
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getCurrentUser };
