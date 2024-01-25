const router = require('express').Router();
const { User } = require('../../models');
const { sendEmail } = require('../../utils/emailService'); // Adjust the path as necessary

// Endpoint to handle user registration
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    // Send a welcome email to the new user
    const emailOptions = {
      from: process.env.EMAIL_USER,
      to: userData.email,
      subject: 'Welcome to Our Platform!',
      text: 'Thank you for signing up for our platform. Enjoy our services!',
    };
    
    await sendEmail(emailOptions);

    // Save the session and respond
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// Endpoint to handle user login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Endpoint to handle user logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

