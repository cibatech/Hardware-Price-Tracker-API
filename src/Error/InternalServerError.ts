export class GotEmptyList extends Error{
    constructor(private At:string){
        super(`Got empty lists at ${At}. This may happen by internal server mistake`)
    }
}