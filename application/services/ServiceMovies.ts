export type TParams = Record<string,any>
export class ServiceMovies {
    private _apiKey: string = ""
    private _baseUrl: string = ""

    constructor(apiKey: string, baseUrl: string){
        this._apiKey = apiKey
        this._baseUrl = baseUrl
    }

    private async getMovies(queryParams: Array<TParams>): Promise<any>{
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
        return await response.json()
    }

    public async randomizePage(categoryId:number): Promise<any>{
        const page = Math.floor(Math.random() * 101);
        const order = Math.round(Math.random());

        const params: Array<TParams> = [
            {"api_key":this._apiKey},
            {"page":page},
            {"with_genres":categoryId},
            {"sort_by":`popularity.${order === 1 ? 'desc' : 'asc'}`},
            {"language":'pt-BR'}
        ]

        return this.getMovies(params)
    }
}