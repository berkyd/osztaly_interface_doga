class Statue implements ArtWork{
    title: string;
    year:string;
    price:number;
    height:number;
    constructor(title:string,year:string,price:number,height:number){
        this.title=title;
        this.year=year;
        this.price=price;
        this.height=height;
}
}