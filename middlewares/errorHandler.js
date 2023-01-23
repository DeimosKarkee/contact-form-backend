import ErrorResponse from "../utils/ErrorResponse";

const errorHandler = (err, req, res, next) => {
  const error = { ...err };
  error.message = err.message;

  console.log(err);

  if (err.name === "CastError") {
    const message = `Api not found with the id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  res
    .status(error.statusCode || 500)
    .json({ status: false, error: error.message || "Server Error" });
};

export default errorHandler;
