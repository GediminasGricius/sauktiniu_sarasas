export class User{
    constructor(
        public name:string,
        public password:string,
        public expiresIn?:number
    ){
        this.refreshTimer();
    }

    public isExpired():boolean{
        return this.expiresIn<new Date().getTime();
    }

    public refreshTimer(){
        this.expiresIn=new Date().getTime()+60*60*1000;
    }


}
