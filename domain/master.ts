import { User } from "./user";

export class Master extends User{
    tips: Array<string> = []

    constructor(id:string,shortName: string){
        super(id,shortName)
        this.tips = []
    }

    public addTip(tip: string) {
        this.tips.push(tip)
    }
}