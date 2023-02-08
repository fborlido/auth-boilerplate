import bc from "bcrypt";
import jwt from "jsonwebtoken";
import AppError from "../errors/Error.js";
import User from "../models/User.js";

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError("Missing params", 400));
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return next(new AppError(`User with email ${email} not found`, 404));
    }

    const isPWcorrect = await bc.compare(password, user.password);

    if (!isPWcorrect) {
      return next(new AppError("Invalid Credentials", 400));
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET
    );

    if (!token) {
      return next(new AppError("Error creating token", 500));
    }

    return res
      .status(200)
      .cookie("access_token", token, { httpOnly: true, maxAge: 1000 * 60 * 30 })
      .send("Login Successful");
  } catch (error) {
    return next(error);
  }
};

export default login;
