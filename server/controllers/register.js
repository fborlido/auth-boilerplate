import bc from "bcrypt";
import AppError from "../errors/Error.js";

import User from "../models/User.js";

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return next(new AppError("Missing Params", 400));
    }

    const user = await User.findOne({ email: email });

    if (user) {
      return next(new AppError(`User ${email} already exists`, 400));
    }

    const hashedPW = await bc.hash(password, 10);

    if (!hashedPW) {
      return next(new AppError(`Error creating user`, 500));
    }

    const newUser = new User({ name, email, password: hashedPW });

    const savedUser = await newUser.save();

    if (!savedUser) {
      return next(new AppError(`Error saving user on DB`, 500));
    }

    return res.status(200).send("User registered Successfully");
  } catch (error) {
    console.log(error);
    return next(error)
  }
};

export default register;
