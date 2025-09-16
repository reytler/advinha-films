import { MovieDto } from "../domain/dtos/MovieDto";
import { moviesMock } from "../mocks/movies";

export class ServiceMovies {
    private movies: Array<MovieDto> = moviesMock

    constructor(){

    }

    public getMoviesByCategory(category: string): Array<MovieDto>{
        return this.movies.filter(movie=>movie.category === category)
    }
}