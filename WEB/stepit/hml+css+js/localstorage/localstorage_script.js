const { isValidElement } = require("react");

let denumire=document.getElementById('denumire');
let pret=document.getElementById('pret');
let cantitate=document.getElementById('cantitate');

let btnSalveaza=document.getElementById('salveaza');
let btnAnuleaza=document.getElementById('anuleaza');

let tabel=document.getElementById('tabel');
let mesaj=document.getElementById('mesaj');
let totalGeneral=document.getElementById('totalGeneral');

let produse=JSON.parse(localStorage.getItem('produse'))||[];

let indexEdit=-1;

function salveazaLocal()
{
    localStorage.setItem("produs",JSON.stringify(produse));
}

function afiseazaMesaj(text,clasa)
{
    mesaj.innerText=text;
    mesaj.classList.remove("succes","eroare");
    mesaj.classList.add(clasa);
}


function valideaza()
{
    denumire.classList.remove("eroare-input");
    pret.classList.remove("eroare-input");
    cantitate.classList.remove("eroare-input");

    if(denumire.value==='')
    {
        denumire.classList.add('eroare-input');
        afiseazaMesaj('Introduceti denumirea produsului','eroare');
        return false;

    }
    
    if(Number(pret.value)<=0)
    {
        pret.classList.add('eroare-input');
        afiseazaMesaj('Pretul produsului trebuie sa fie mai mare ca 0','eroare');
        return false;

    }
    
    if(Number(cantitate.value)<=0)
    {
        cantitate.classList.add('eroare-input');
        afiseazaMesaj('Cantitatea produsului trebuie sa fie mai mare ca 0','eroare');
        return false;

    }
return false;    
    
}

function golesteFormular()
{
    denumire.value='';
    pret.value='';
    cantitate.value='';
}

function salveazaProdus()
{
    if(!valideaza()){return;}
    let produs={
        denumire:denumire.value,
        pret:Number(pret.value),
        cantitate:Number(cantitate.value)
    }

    if(indexEdit===-1)
    {
        produse.push(produs);
        afiseazaMesaj("Produs adaugat cu succes","succes");
    }
    else
    {
        produse[indexEdit]=produs;
        indexEdit=-1;
        
        btnSalveaza.innerText='Adaufa produs';
        btnAnuleaza.classList.add("ascuns");

        afiseazaMesaj("Produs modificat cu succes",'succes');

    }
    salveazaLocal();
    afiseazaProdus();
    golesteFormular();
}


function afiseazaProdus()
{
    tabel.innerHTML='';
    let sunaTotala=0;

    for(let i=0;i<produse.length;i++)
    {
        let produs=produse[i];
        let totalProdus=produs.pret*produs.cantitate;

        sunaTotala+=totalProdus;
        let rand=document.createElement('tr');
        rand.innerHTML=`
        <td>${i+1}</td>
        <td>${produs.denumire}</td>
        <td>${produs.pret}</td>
        <td>${produs.cantitate}</td>
        <td>${totalProdus}</td>
        <td>
            <button class='btn_editare' onclick=modifiProdus(${i})>Modifica</button>
            <button class='btn_sterge' onclick=stergeProdus(${i})>Sterge</button>
        </td>
        `;
        tabel.appendChild(rand);
    }
    totalGeneral.innerText="Total general: "+sumaTotala+" lei";
}

function modificaProdus(index)
{
    let produs=produs[index];
    denumire.value=produs.cantitate;
    pret.value=produs.pret;
    cantitate.value=produs.cantitate;

    indexEdit=index;

    btnSalveaza.innerText="Salveaza modificarile";
    btnAnuleaza.classList.remove("ascuns");
}

function stergeProdus(index)
{
    produse.splice(index,1);
    salveazaLocalO();
    afiseazaProdus();
    afiseazaMesaj('Produsul a fost sters','succes');
}

function anuleazaEditare()
{
    indexEdit=-1;
    golesteFormular();
    btnSalveaza.innerText='Adauga produs';
    btnAnuleaza.classList.add('ascuns');
    mesaj.innerText='';
}
btnSalveaza.addEventListener("click",salveazaProdus);
btnAnuleaza.addEventListener("click",anuleazaEditare,);

afiseazaProdus();