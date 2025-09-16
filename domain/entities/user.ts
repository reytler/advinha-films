export class User {
    id: string
    shortName: string

    constructor(shortName: string, id: string){
        this.id = id
        this.shortName = shortName
    }
}