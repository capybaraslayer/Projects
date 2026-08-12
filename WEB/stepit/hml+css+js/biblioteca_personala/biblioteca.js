let carti=[];
let indexEditare=null;
let titlu =document.getElementById('titlu');
let autor =document.getElementById('autorul');
let categorie =document.getElementById('categorie');
let an =document.getElementById('an');
let nr_pagini =document.getElementById('nr_pagini');
let disponibil =document.getElementById('disp');
let formular= document.getElementById('formular');
let tbody=document.getElementById('date');



function afiseazaMesaj(text,tip)
{
    let mesaj=document.getElementById('mesaj');
    mesaj.textContent=text;
    mesaj.className=tip;
}

function afisareTabel()
{
    tbody.innerHTML='';
    for(let i =0;i<carti.length;i++)
    {
        let rand=document.createElement('tr');
        rand.innerHTML = `<td>${i+1}</td><td>${carti[i].titlu}</td><td>${carti[i].autor}</td><td>${carti[i].categorie}</td>
        <td>${carti[i].an}</td><td>${carti[i].pagini}</td><td>${ carti[i].disponibila ? "Da" : "Nu"}</td>
        <td><button data-index="${i}">Editeaza</button></td><td><button data-index="${i}">Șterge</button></td>`;
        tbody.appendChild(rand);
    }
}

function salvare()
{
    localStorage.setItem('cheie',JSON.stringify(carti));
}

function incarcare()
{
    let date = localStorage.getItem("cheie");
    if (date) {
    carti = JSON.parse(date);
    }
}
formular.addEventListener("submit",function(e)
{
    e.preventDefault();
    console.log(indexEditare);
    let valtitlu =titlu.value;
    let valautor =autor.value;
    let valcategorie =categorie.value;
    let valan =an.value;
    let valnr =nr_pagini.value;
    let valdisponibil =disponibil.checked;

    if(valtitlu.length<3)
    {
        afiseazaMesaj('Titlu cartii este prea scurt','eroare');
        return
    }
    if(valautor.length==0)
    {
        afiseazaMesaj('Completeaza spatiile goale','eroare');
        return
    }
    if((Number(valnr)<0)||(Number(valnr)>1000))
    {
        afiseazaMesaj('Completeaza spatiile goale','eroare');
        return
    }
    if(valcategorie.length==0)
    {
        afiseazaMesaj('Completeaza spatiile goale','eroare');
        return
    }

    if((isNaN(valan))||(Number(valan)<1600)||(Number(valan)>2026))
    {
        afiseazaMesaj('Anul aparitiei nu este corect','eroare');
        return
    }
    let carte=
    {
        titlu:valtitlu,
        autor:valautor,
        categorie:valcategorie,
        an:Number(valan),
        pagini:Number(valnr),
        disponibila:valdisponibil

    }
    if(indexEditare!==null)
    {
            carti[indexEditare]=carte

    }
    else{carti.push(carte);}
    salvare();
    formular.reset();
    afisareTabel();
    afiseazaMesaj('Cartea a fost inregistrata cu succes!','succes');
    indexEditare=null;
});

tbody.addEventListener('click',function(e){
    if(e.target.textContent=='Șterge')
    {
        let index = Number(e.target.dataset.index);
        carti.splice(index, 1);
        afiseazaMesaj('Cartea a fost stearsa cu succes','succes');
        salvare();
        afisareTabel()

    }
    if(e.target.textContent=='Editeaza')
    {
        indexEditare = Number(e.target.dataset.index);
        titlu.value = carti[indexEditare].titlu;
        autor.value = carti[indexEditare].autor;
        an.value = carti[indexEditare].an;
        categorie.value = carti[indexEditare].categorie;
        nr_pagini.value = carti[indexEditare].pagini;
        disponibil.checked = carti[indexEditare].disponibila;

    }

});
incarcare();
afisareTabel();
