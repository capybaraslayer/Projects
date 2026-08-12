
let studenti=[]; //tablou vid

let inputNume=document.getElementById("nume");
let inputNota=document.getElementById("nota");
let btnAdauga=document.getElementById("adauga");

let mesaj=document.getElementById("mesaj");
let tabel=document.getElementById("tabel");

let mediaText=document.getElementById("media");
let totalText=document.getElementById("total");

function afiseazzaMesaj(text,tip)
{
   mesaj.innerText=text; 
   mesaj.classList.remove("eroare");
   mesaj.classList.remove("succes");

   mesaj.classList.add(tip);
}

function valideazaDate(nume,nota)
{
    let valid=true;
    inputNume.classList.remove("input-eroare");
    inputNota.classList.remove("input-eroare");

    if(nume==="")
    {
      inputNume.classList.add("input-eroare");
      afiseazzaMesaj("indica numele studentului","eroare");
      valid=false; 
    }
    else if(nota==="" || isNaN(Number(nota)))
    {
      inputNota.classList.add("input-eroare");
      afiseazzaMesaj("indica nota studentului","eroare");
      valid=false; 
    }
    else if(Number(nota)<1 || Number(nota)>10)
    {
      inputNota.classList.add("input-eroare");
      afiseazzaMesaj("Nota trebuie sa fie intre 1 si 10","eroare");
      valid=false; 
    }
  return  valid; 
}


function calculeazaMedia()
{
    if(studenti.length===0){return 0;}

    let suma=0;
    for(let i=0; i<studenti.length;i++)
        {
            suma+=studenti[i].nota;
        }
    return suma/studenti.length;
}

function stergeStudent(index)
{
    studenti.splice(index,1);
    afiseazaStudenti();
    afiseazzaMesaj("Studentul eliminat cu succes","succes")

}

function afiseazaStudenti()
{
    tabel.innerHTML='';

    for(let i=0;i<studenti.length;i++)
        {
            let rand=document.createElement("tr");

            let colNr=document.createElement("td");
            let colNume=document.createElement("td");
            let colNota=document.createElement("td");
            let colStatut=document.createElement("td");
            let colActiune=document.createElement("td");

           colNr.innerText=i+1;
           colNume.innerText=studenti[i].nume;
           colNota.innerText=studenti[i].nota;

            if(studenti[i].nota>=5)
                {
                    colStatut.innerText="Promovat";
                    rand.classList.add("promovat");
                }
                else
                {
                  colStatut.innerText="Nepromovat";
                    rand.classList.add("nepromovat");  
                }

            let btnSterge=document.createElement("button");
            btnSterge.innerText="sterge";
            btnSterge.classList.add("btn-sterge");

            btnSterge.addEventListener("click",function(){
                stergeStudent(i)
            });

            colActiune.appendChild(btnSterge);

            rand.appendChild(colNr);
            rand.appendChild(colNume);
            rand.appendChild(colNota);
            rand.appendChild(colStatut);
            rand.appendChild(colActiune);

            tabel.appendChild(rand)
        }
        mediaText.innerText="Media generala: "+calculeazaMedia().toFixed(2);
        totalText.innerText="Media studenti: "+studenti.length;

}

btnAdauga.addEventListener("click",function(){

    let nume=inputNume.value.trim();
    let nota=inputNota.value;
    console.log(nume);
    if(!valideazaDate(nume,nota))
    {
        return;
    }

    let student=
    {
       nume: nume,
       nota: Number(nota)
    };

    studenti.push(student);
    afiseazaStudenti();
    afiseazzaMesaj("Student inserat cu succes","succes");

    inputNume.value="";
    inputNota.value="";

    inputNume.classList.remove("input-eroare");
    inputNota.classList.remove("input-eroare");
});




