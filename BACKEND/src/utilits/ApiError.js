class ApiError extends Error {
    constructor(
        statusCode, 
        message = "Something went wrong", 
        errors = [], 
        stack = ""
    ) {
      super(message); // normal error ka message
      this.status = statusCode; // jaise 404, 401, 500
      this.errors = errors; // agar multiple errors bhejne ho
      this.success = false; // error hai, toh success false
      this.data = null; // error me data nahi hoga
  
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export {ApiError} ;
  