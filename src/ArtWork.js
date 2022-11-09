"use strict";
class Statue {
    constructor(title, year, price, height) {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
    kiir() {
        console.log();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    var i;
    let alapar = 0;
    let db = 0;
    (i = document.querySelector(".add")) === null || i === void 0 ? void 0 : i.addEventListener('click', () => {
        let cim = document.querySelector('.title').value;
        let ev = document.querySelector('.year').value;
        let ar = parseInt(document.querySelector('.price').value);
        let magassag = parseInt(document.querySelector('.height').value);
        let cimminta = /[a-zA-Z]\s,/;
        let minta = /[a-zA-Z0-9]{1,}/;
        if (cim.length < 1 && cimminta.test(cim) == false) {
            alert("Rossz név!");
        }
        else if (ev.length < 1) {
            alert("Rossz év!");
        }
        else if (ar < 1) {
            alert("Rossz ár!");
        }
        else if (magassag < 10) {
            alert("Rossz magasság!");
        }
        else {
            let uj = new Statue(cim, ev, ar, magassag);
            alapar += ar;
            db++;
            let aar = document.querySelector('.aar');
            if (aar) {
                aar.textContent = `${alapar}`;
            }
            let dszam = document.querySelector('.darabszam');
            if (dszam) {
                dszam.textContent = `${db}`;
            }
        }
    });
});