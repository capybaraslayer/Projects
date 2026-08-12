class Carte
{
    constructor(titlu,autor,cantitate)
    {
        this.titlu=titlu;
        this.autor=autor;
        this.cantitate=cantitate;
    }

    esteDisponibila()
    {
        return this.cantitate >0;
    }

    info()
    {
        return `${this.titlu} - ${this.autor} (${this.cantitate})`;
    }
}

class Biclioteca
{
    constructor()
    {
        this.carti=[];
    }

    adauga(carte)
    {
        this.carti.push(carte);
    }
    disponibile()
    {
        return this.carti.filter(c=>c.esteDisponibila());
    }
    totalExemplare()
    {
        return this.carti.reduce((acc,n)=>acc+n.cantitate,0);
    }
}

let biblioteca = new Biclioteca();
biblioteca.adauga(new Carte("1984", "Orwell", 3));
biblioteca.adauga(new Carte("Ion", "Rebreanu", 0));
biblioteca.adauga(new Carte("Baltagul", "Sadoveanu", 5));

let menu=document.getElementById('menu');
let cards=document.getElementById('cards');
let pageTitle=document.getElementById('pageTitle');

let menuItems =["Acasa","Carti","Adauga carte","Imprumuturi"];

function creazaMeniu()
{
    let denumire =document.createElement('div');
        denumire.classList.add('den');
        denumire.innerText='Biblioteca';
        menu.appendChild(denumire);
    for(let i=0;i<menuItems.length;i++)
    {
        let btn=document.createElement('button');
        btn.innerText=menuItems[i];
        btn.classList.add('btn-menu');
    
        if(i===0)
        {
            btn.classList
        }

        menu.appendChild(btn);
    }



}


creazaMeniu();