import {User} from "./user"
import {Team} from "./team"
import { Movie } from "./movie"
import { Category } from "./category"
import { Master } from "./master"
export class Room {
    id: string
    name: string
    users: Array<User>
    teams: Array<Team>
    movies: Array<Movie>
    category: Category
    startedGame: boolean

    constructor(id: string, name: string, teams: Array<Team>, category: Category,startedGame: boolean = false){
        this.id = id
        this.name = name
        this.users = [],
        this.teams = teams,
        this.movies = []
        this.category = category
        this.startedGame = startedGame

        this.insertMovies()
    }

    public setStartedGame(startedGame: boolean){
        if(this.teams[0].users.length > 0 && this.teams[1].users.length){
            this.startedGame = startedGame
        }
    }

    public removeUserOfRoom(user: User){
        this.teams.map(team=>{
            const index = team.users.indexOf(user) 
            if(index !== -1){
                team.users.splice(index,1)
            }
        })

        const index = this.users.indexOf(user)
        if(index !== -1){
            this.users.splice(index,1)
        }
    }

    public defineTeamMaster(idTeam: string, user: User){
        this.teams.find(t=>t.id === idTeam)?.defineTeamMaster(user)
    }

    public addTip(user: User, tip: string){
        this.teams.map(team=>{
            if(team.users.includes(user)){
                const master = team.users.find(u=>u === user)
                if(master instanceof Master){
                    master.addTip(tip)
                }
            }
        })
    }

    public addUserInRoom(user: User): void{
        if(!this.startedGame){
            this.users.push(user)
        }
    }

    public addUserInTeam(idTeam: string, user: User): void{
        user.teamId = idTeam;
        this.teams.find((team:Team)=>team.id === idTeam)?.addUser(user)
    }

    public addMovieInTeam(idTeam: string, movie: Movie): void{
        movie.teamId = idTeam;
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