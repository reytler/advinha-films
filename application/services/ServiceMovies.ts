import {MovieDto} from "../../domain/dtos/MovieDto"
export type TParams = Record<string,string>
export class ServiceMovies {
    private movies: Array<MovieDto> = []
    private _apiKey: string = ""
    private _baseUrl: string = ""

    constructor(apiKey: string, baseUrl: string){
        this._apiKey = apiKey
        this._baseUrl = baseUrl
    }

    public async getRandomMovies(queryParams: Array<TParams>): Promise<Array<MovieDto>>{
        const params = new URLSearchParams();
        queryParams.forEach(obj=>{
            Object.entries(obj).forEach(([key, value]) => {
                params.append(key, value);
            });
        })

        const options = {
            method: "GET",
            headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this._apiKey}`
            }
        }

        const url: string = `${this._baseUrl}?${params.toString()}`
        const response = await fetch(url,options)
        const result = response.json()
        console.log(result)

        return this.movies
    }
}