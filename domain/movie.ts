export class Movie {
    id: string
    name: string
    movieCover: string

    constructor(id: string, name: string, movieCover: string){
        this.id = id
        this.name = name
        this.movieCover = movieCover
    }
}