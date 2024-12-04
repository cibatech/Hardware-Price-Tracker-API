
/**
 * Custom error class for handling invalid parameters.
 * 
 * This class extends the built-in `Error` class to provide detailed 
 * information about invalid parameters and suggested fixes.
 */
export class InvalidParameterError extends Error{
    /**
     * Constructs an instance of `InvalidParameterError`.
     * 
     * @param Parameter - The name or description of the invalid parameter.
     * @param Fix - A suggested fix or resolution for the invalid parameter.
     * 
     * @example
     * ```typescript
     * throw new InvalidParameterError("username", "provide a non-empty string");
     * // Error message: "the Parameter:username is invalid try to:provide a non-empty string"
     * ```
     */
    constructor(Parameter:string,Fix:string){
        super(`the Parameter:${Parameter} is invalid try to:${Fix}`)
    }
}