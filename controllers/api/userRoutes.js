const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const userData = await User.findOne({ where: { name: req.body.name } });

    if (!userData) {
      const err = new Error("Incorrect Username");

      err.status = 401;
      err.message = "Incorrect Username";

      return next(err);
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      const err = new Error("Incorrect Password");

      err.status = 401;
      err.message = "Incorrect Password";

      return next(err);
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;

      res.json({
        user: userData.name,
        message: "You are now logged in!",
      });
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
