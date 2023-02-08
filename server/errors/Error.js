class AppError extends Error {
  constructor(message, code, options = {}) {
    super(message);
    this.code = code;
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value;
    });
  }
  get message() {
    return this.message;
  }
  get statusCode() {
    return this.code;
  }
}

export default AppError;
