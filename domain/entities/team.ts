import {User} from "./user"
import {Movie} from "./movie"

export class Team {
    id: string
    color: string
    users: Array<User>
    movies: Array<Movie>
    hitsCount: number
    won: boolean
    winQtt: number

    constructor(id: string, color: string,users: Array<User>,movies: Array<Movie>, winQtt: number){
        this.color = color
        this.users = users
        this.movies = movies
        this.winQtt = winQtt
        this.id = id
        this.hitsCount = 0
        this.won = false
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