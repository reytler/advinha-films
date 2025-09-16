import {User} from "./user"
import {Team} from "./team"
import { Movie } from "./movie"
import { Category } from "./category"
export class Room {
    id: string
    name: string
    users: Array<User>
    teams: Array<Team>
    movies: Array<Movie>
    category: Category

    constructor(id: string, name: string, teams: Array<Team>, category: Category){
        this.id = id
        this.name = name
        this.users = [],
        this.teams = teams,
        this.movies = []
        this.category = category

        this.insertMovies()
    }

    public addUserInRoom(user: User): void{
        this.users.push(user)
    }

    public addUserInTeam(idTeam: string, user: User): void{
        this.teams.find((team:Team)=>team.id === idTeam)?.addUser(user)
    }

    public addMovieInTeam(idTeam: string, movie: Movie): void{
        this.teams.find((team:Team)=>team.id === idTeam)?.addMovie(movie)
    }

    public insertMovies(): void{
        if(this.category.movies.length > 0){
            this.movies.concat(this.category.movies)
            this.randomMoviesInTeams()
        }
    }

    public randomMoviesInTeams(): void{
        let first = true;
        this.movies.map((movie)=>{
            this.addMovieInTeam(this.teams[first ? 0 : 1].id,movie)
            first = !first
        })
    }

    public randomUsersInTeams(): void{
        let first = true;
        if(this.users.length > 0){
            this.users.map((user)=>{
                this.addUserInTeam(this.teams[first ? 0 : 1].id,user)
                first = !first
            })
        }
    }

    public markMovieAndAddHit(inputmovie: Movie): void{
        this.movies.find(movie=>movie === inputmovie)?.toMark()
        this.teams.map(team=>team.addHit(inputmovie))
    }
    
    public getWinnerTeam(): Team | null{
        const arrayWinnerTeam = this.teams.filter(team=>team.teamWon())

        if(arrayWinnerTeam.length > 0){
            return arrayWinnerTeam[0]
        }

        return null
    }
}