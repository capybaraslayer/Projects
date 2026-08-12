// === VARIABILE GLOBALE ===
let cheltuieli=[]              // array-ul principal, ține toate cheltuielile
let IDdesters=null;             // aici salvăm id-ul cheltuielii care va fi ștearsă (setat la click pe "Sterge")
let IDModificare=null;          // aici salvăm id-ul cheltuielii care va fi modificată (setat la click pe "Modifica")
let lista=document.getElementById("lista");
let inputNume=document.getElementById("nume_chelt");
let inputSuma=document.getElementById("suma_chelt");
let btn=document.getElementById("trimite");
let mesaj=document.getElementById('mesaj');
let suma =document.getElementById('suma');
let modalm = document.getElementById('modalm');
let modal =document.getElementById('modal');
let id=0;    
// contor global, folosit ca să dăm id unic fiecărei cheltuieli noi

// === FUNCȚIE: afișează mesaj de eroare/succes ===
function afisareMesaj(text,tip)
{
    mesaj.classList.remove("eroare");
    mesaj.classList.remove("succes");
    mesaj.classList.add(tip);     // adaugă clasa "eroare" sau "succes", pentru culoare
    mesaj.textContent=text;
}

// === FUNCȚIE: validează input-urile înainte de a adăuga o cheltuială ===
function valideazaMesaj(inputNume,inputSuma)
{
    let valid=true;
    if(inputNume.value==='' || inputSuma.value==='')
    {
        afisareMesaj("Nu ai introdus un nume sau o suma",'eroare')
        valid=false;
    }
    else if(Number(inputSuma.value)<1 || Number(inputSuma.value)>1000000)
    {
        afisareMesaj("Suma este prea mare sau prea mica",'eroare');
        valid =false
    }
     return valid; 
}

// === EVENT: click pe butonul "Trimite" — adaugă o cheltuială nouă ===
btn.addEventListener("click",function()
    {   
        let bool = valideazaMesaj(inputNume,inputSuma)
        if(bool===true){
        let cheltuiala={
            id:++id,                          // id unic, crește cu 1 de fiecare dată
            nume:inputNume.value,
            suma:Number(inputSuma.value)
        }
        cheltuieli.push(cheltuiala);
        afisareMesaj("Succes ai adaugat o cheltuiala","succes")
        }
        afiseazaLista();     // reafișează lista, ca să apară noua cheltuială
        inputNume.value='';
        inputSuma.value='';
    });

// === EVENT: click pe butonul "sterge" din modal — confirmă ștergerea ===
function Sterge(IDdesters){
    let confirmare=document.getElementById("sterge");
    confirmare.addEventListener('click',function()
        {
            // elimină din array cheltuiala cu id-ul salvat mai înainte (IDdesters)
            cheltuieli=cheltuieli.filter(function(item){
                return item.id!==IDdesters;
            });
            afiseazaLista();
            afisareMesaj("Chelutiala a fost stearsa  cu succes","succes");
            modal.style.display='none';    // ascunde modalul, ștergerea s-a terminat
        });
}
// ⚠️ ATENȚIE, întrebare pentru tine: linia de mai jos are un id gol (""), 
// ceea ce va da eroare (element null) — la ce buton te gândeai să o folosești?
function Modificare()
{
let modificare=document.getElementById("modifica");
let schimba=document.getElementById('cheltuialaNoua');
let schimbasuma=document.getElementById('sumaNoua');
let schimbabtn=document.getElementById('butschimbare');
modificare.addEventListener("click",function()
    {
        modalm.style.display='none';
        input_modificare.style.display='block';
        schimbabtn.addEventListener('click',function()
        {
            cheltuieli[IDModificare]={
                id:IDModificare,
                nume:schimba.value,
                suma:Number(schimbasuma.value)
            }
            afiseazaLista();
            afisareMesaj("Modificat cu succes","succes");
            input_modificare.style.display='none'; 
           
});

    
    });

}
// === EVENT: click pe butonul "cancel" din modal — anulează ștergerea ===
let cancel=document.getElementById("cancel");
cancel.addEventListener('click',function()
    {
        afiseazaLista();
        afisareMesaj("Chelutiala nu a fost stearsa","eroare");
        modal.style.display='none';    // ascunde modalul, fără să șteargă nimic
    }); 
let cancelmod=document.getElementById("cancelmod");
let cancell=false;
cancelmod.addEventListener('click',function()
    {   cancell =null;
        afiseazaLista();
        afisareMesaj("Chelutiala nu a fost modificata","eroare");
        modalm.style.display='none'; 
        cancell=true;// ascunde modalul, fără să șteargă nimic
    }); 


// === FUNCȚIE: reconstruiește lista vizibilă din array-ul cheltuieli ===
function afiseazaLista()
{
    lista.innerHTML="";  
    // golește lista veche, ca să nu se dubleze
    cheltuieli.forEach(function(cheltuiala)
        {   
            let itemNou=document.createElement('li');
            let btnSterge=document.createElement('button');
            let btnModifica=document.createElement('button');
            btnSterge.textContent="Sterge"; 
            btnModifica.textContent="Modifica";
            itemNou.textContent="ID"+cheltuiala.id+"|Nume cheltuiala: "+cheltuiala.nume + "| suma: "+cheltuiala.suma+" lei";
            lista.appendChild(itemNou);  
            itemNou.appendChild(btnSterge);
            itemNou.appendChild(btnModifica);

            // la click pe "Sterge": arată modalul, salvează CE cheltuială va fi ștearsă
            btnSterge.addEventListener("click",function(){
                modal.style.display='block';
                IDdesters=cheltuiala.id;
                Sterge(IDdesters);
            });  

            // la click pe "Modifica": arată modalul, salvează CE cheltuială va fi modificată
            btnModifica.addEventListener("click",function()
            {
    
                modalm.style.display='block';
                IDModificare=cheltuiala.id;
                if(cancell!==true)
                {
                cheltuieli = cheltuieli.filter(function(item) {
                return item.id !==  IDModificare;  // true = rămâne, false = e exclus
                });
                Modificare();
                }
                else
                {   
                    Modificare();
                    afiseazaLista();
                }
                
            
            });
              
        });
        Suma();
    };


function Suma()
{
    suma.innerText='';
    let total=0;
    cheltuieli.forEach(function(cheltuiala)
        {
            total+=cheltuiala.suma;
        });
    suma.innerText=total;

}
