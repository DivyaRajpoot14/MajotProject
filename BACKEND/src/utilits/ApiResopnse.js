class ApiResponse {
    constructor(statusCode, data, message = "Success") {
      this.status = statusCode; // 200, 201, etc.
      this.data = data;             // jo bhi response bhejna hai
      this.message = message;       // message, default: Success
      this.success = statusCode < 400; // agar 400 se chhota hai, toh success true
    }
  }
  
  export  { ApiResponse };
  