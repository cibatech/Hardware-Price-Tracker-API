export class ValidationError extends Error{
    constructor(Description:string){
        super(`Invalid arguments. ${Description}`)
    }
}