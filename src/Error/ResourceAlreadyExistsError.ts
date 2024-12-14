export class ResourceAlreadyExistsError extends Error{
    constructor(entity:string){
        super(`Resouce: ${entity} already exists`)
    }
}