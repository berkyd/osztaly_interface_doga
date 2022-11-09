class Statue implements ArtWork{
    title: string;
    year:Date;
    price:number;
    height:number;
    constructor(title:string,year:Date,price:number,height:number){
        this.title=title;
        this.year=year;
        this.price=price;
        this.height=height;
}
    kiir(): void {
    console.log(this.toString());
  }
    toString(): string {
    return this.title + " " + this.year + " " + this.price + " Ft";
  }
}