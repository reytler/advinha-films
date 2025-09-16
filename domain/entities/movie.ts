export class Movie {
    id: string
    name: string
    movieCover: string
    marked: boolean

    constructor(id: string, name: string, movieCover: string, marked: boolean = false){
        this.id = id
        this.name = name
        this.movieCover = movieCover
        this.marked = marked
    }

    public toMark(){
        this.marked = true
    }
}