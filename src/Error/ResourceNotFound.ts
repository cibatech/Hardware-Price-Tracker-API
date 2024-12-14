
/**
 * Custom error class for handling resource not found scenarios.
 * 
 * This class extends the built-in `Error` class to provide a clear message 
 * when a specific resource cannot be found based on a given key.
 */
export class ResourceNotFoundError extends Error{
    /**
     * Constructs an instance of `ResourceNotFoundError`.
     * 
     * @param Resource - The name of the resource that was not found.
     * @param Key - The key or identifier used in the search for the resource.
     * 
     * @example
     * ```typescript
     * throw new ResourceNotFoundError("User", "email@example.com");
     * // Error message: "Can't find any User with the specified email@example.com"
     * ```
     */
    constructor(Resource:string, Key:string){
        super(`Can't find any ${Resource} with the specified ${Key}`);
    }
}