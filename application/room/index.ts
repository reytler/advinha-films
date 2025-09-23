import { Category, Movie, Room, Team } from "@advinha-films/domain";
import { ServiceMovies } from "../services/ServiceMovies";


interface IMovie {
  id: string
  poster_path: string
  title: string
}

export class RoomApp{
    public _rooms: Array<Room> = []

    public RoomApp(){
        
    }

    public async createRoom(codigoCategoria: number, nomeCategoria: string):Promise<string>{
        const result = await this.obterFilmes(codigoCategoria)

        if(result.length === 0)
            throw new Error("Não foram encontrados filmes...")

        const movies: Array<Movie> = this.mapMovies(result as Array<IMovie>)

        const _category: Category = new Category(codigoCategoria.toString(),nomeCategoria,movies)

        const idRoom: string = crypto.randomUUID()
        const teams: Array<Team> = []
        let idTeam: string = crypto.randomUUID()
        const team1: Team = new Team(idTeam,"#FF0000",[],[],5)
        teams.push(team1)
        idTeam = crypto.randomUUID()
        const team2: Team = new Team(idTeam,"#0000FF",[],[],5)
        teams.push(team2)

        this._rooms.push(new Room(idRoom,idRoom,teams,_category))

        return idRoom
    }

    public async obterFilmes(codigoCategoria: number):Promise<Array<unknown>>{
        try {
            const _service = new ServiceMovies("","https://api.themoviedb.org/3/discover/movie")
            const res = await _service.randomizePage(codigoCategoria)
            return res.results            
        } catch (error) {
            console.error("ERRO AO OBTER FILMES: ",error)
        }

        return []
    }

    public mapMovies(input: Array<IMovie>): Array<Movie>{
        const array: Array<Movie> = []

        input.map((mov: IMovie)=>{

            const newMovie = new Movie(
            mov.id,
            mov.title,
            `https://image.tmdb.org/t/p/w500${mov.poster_path}`
            )
            
            array.push(newMovie)
        })

        return array
    }
}