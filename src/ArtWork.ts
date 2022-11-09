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
kiir():void{
    console.log();
}
}
    document.addEventListener('DOMContentLoaded',()=>{
    let alapar:number=0;
    let db:number = 0;
    document.querySelector(".add")?.addEventListener('click',()=>{
    let cim = (<HTMLInputElement>document.querySelector('.title')).value;
    let ev = (<HTMLInputElement>document.querySelector('.year')).value;
    let ar = parseInt((<HTMLInputElement>document.querySelector('.price')).value);
    let magassag = parseInt((<HTMLInputElement>document.querySelector('.height')).value);
    let cimminta = /[a-zA-Z]\s,/;
    let minta = /[a-zA-Z0-9]{1,}/;
    if(cim.length<1 && cimminta.test(cim)==false){
        alert("Rossz név!")
    }else if(ev.length<1){
        alert("Rossz év!")
    }else if(ar<1){
        alert("Rossz ár!")
    }else if(magassag<10){
        alert("Rossz magasság!")
    }
    else{
        let uj = new Statue(cim,ev,ar,magassag);
        alapar +=ar;
        db++;
        let aar= (<HTMLElement>document.querySelector('.aar'));
        if(aar){
            aar.textContent = `${alapar}`;
        }
        let dszam = (<HTMLElement>document.querySelector('.darabszam'));
        if(dszam){
            dszam.textContent=`${db}`;
        }
    }
})
})