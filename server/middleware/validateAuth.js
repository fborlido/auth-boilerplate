import jwt from "jsonwebtoken";
import AppError from "../errors/Error.js";
import User from "../models/User.js";

const validateAuth = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;

    if (!token) return next(new AppError(`No token provided`, 401));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) return next(new AppError(`Invalid token`, 401));

    const user = await User.findById(decoded.userId);

    if (!user)
      return next(new AppError(`Could not find user with specified id`, 404));

    const { password, ...userData } = user._doc;

    req.user = userData;

    next();
  } catch (error) {
    next(error);
  }
};

export default validateAuth;
