export class TriedInvalidOperation extends Error{
    constructor(When:string){
        super(`Tried invalid operation when ${When}`)
    }
}