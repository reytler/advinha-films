import {MovieDto} from "../dtos/MovieDto"
import {Movie} from "../entities/movie"

declare global {
  interface Array<T> {
    toMovieDtos(this: Movie[]): MovieDto[];
  }
}

Array.prototype.toMovieDtos = function(this: Movie[]): MovieDto[] {
  return this.map(movie => ({
    id: movie.id,
    category: 0,
    movieCover: movie.movieCover,
    name: movie.name,
    teamId: movie.teamId
  }));
};