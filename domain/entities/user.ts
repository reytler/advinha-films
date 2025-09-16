export class User {
    id: string
    shortName: string
    master: boolean
    teamId?: string

    constructor(shortName: string, id: string, master: boolean = false, teamId: string = ""){
        this.id = id
        this.shortName = shortName
        this.master = master
        this.teamId = teamId
    }
}