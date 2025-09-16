import { Movie } from "./movie"

export class Category {
    id: string
    name: string
    movies: Array<Movie>

    constructor(id: string, name: string, movies: Array<Movie>){
        this.id = id
        this.name = name
        this.movies = movies
    }
}