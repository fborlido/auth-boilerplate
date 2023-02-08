import AppError from "./Error.js";

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err instanceof AppError)
    return res.status(err.statusCode || 500).send(err.message);
  else return res.status(500).send("Server Error");
};

export default errorHandler;
