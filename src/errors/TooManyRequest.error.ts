class TooManyRequestError extends Error {
  statusCode = 429;
}

export default TooManyRequestError;
