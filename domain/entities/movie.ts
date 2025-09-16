export class Movie {
    id: string
    name: string
    movieCover: string
    marked: boolean
    teamId: string

    constructor(id: string, name: string, movieCover: string, marked: boolean = false, teamId: string = ""){
        this.id = id
        this.name = name
        this.movieCover = movieCover
        this.marked = marked
        this.teamId = teamId
    }

    public toMark(){
        this.marked = true
    }
}