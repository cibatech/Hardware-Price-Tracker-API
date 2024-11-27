export class ResourceNotFoundError extends Error{
    constructor(Resource:string, Key:string){
        super(`Can't find any ${Resource} with the specified ${Key}`);
    }
}