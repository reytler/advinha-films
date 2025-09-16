import {User} from "./user"
import {Movie} from "./movie"

export class Team {
    color: string = ''
    users: Array<User> = []
    movies: Array<Movie> = []
    hitsCount: number = 0
    won: boolean = false
    winQtt: number = 0

    constructor(color: string,users: Array<User>,movies: Array<Movie>, winQtt: number){
        this.color = color
        this.users = users
        this.movies = movies
        this.winQtt = winQtt
    }

    public addHit(movie: Movie){
        if(this.movies.includes(movie)){
            this.hitsCount += 1
        }       
    }

    public addUser(user: User){
        this.users.push(user)
    }

    public addMovie(movie: Movie){
        this.movies.push(movie)
    }

    public teamWon(){
        this.won = this.hitsCount >= this.winQtt
    }
}