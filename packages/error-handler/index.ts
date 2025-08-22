export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;
    public readonly details?: any;

    constructor(
        message: string,
        statusCode: number,
        isOperational = true,
        details?: any
    ) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.details = details;
        Error.captureStackTrace(this);
    }

}

// Not found error

export class NotFoundError extends AppError{
    constructor(message = "Resources not found") {
        super(message, 404);
    }
}

// Validation Error (use for joi/zod/react-hook-form validation errors)
export class ValidationError extends AppError {
    constructor(message = "Invalid request data", detail?: any) {
        super(message, 404, true, detail);
    }
}

// Authentication error
export class AuthError extends AppError{
    constructor(message = "Unauthorizes") {
        super(message, 401);
    }
}

// Forbidden Error (For Insufficient Permissions)
export class ForbiddenError extends AppError{
    constructor(message = "Forbidden access") {
        super(message, 403);
    }
}

// Database Error 
export class DatabaseError extends AppError{
    constructor(message = "Databse Error", details?: any) {
        super(message, 500, true, details);
    }
}