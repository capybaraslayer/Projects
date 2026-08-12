let nume=document.getElementById("nume");
let varsta=document.getElementById("varsta");
let btn=document.getElementById("btn");
let mesaj=document.getElementById("mesaj");
let titlu =document.getElementById("titlu");

btn.addEventListener("click",function()
{
    titlu.classList.remove("rosu");
    titlu.classList.remove("mare");
    titlu.classList.remove("fundal");
    mesaj.innerText="";
    if(nume==='')
    {
        mesaj.innerText="Introdu numele";
        mesaj.style.color="red";
    }
   else if(varsta.varsta==='')
    {
        mesaj.innerText="Introdu virsta";
        mesaj.style.color="red";
    }
    else
    {
        mesaj.innerText="Datele au fost introduse corect";
        mesaj.style.color="green";

        titlu.classList.add("rosu");
        titlu.classList.add("mare");
        titlu.classList.add("fundal");
    }

});


//ascunderea si afisarea elementelor
let ascunde =document.getElementById("ascunde");
let afiseaza =document.getElementById("afiseaza");
let msg =document.getElementById("msg");

ascunde.addEventListener("click",function()
{
    msg.style.display='none';
});

afiseaza.addEventListener("click",function()
{
    msg.style.display="block";
});


//crearea elementelor noi
//putem crea elemente HTML direct din js
let lista =document.getElementById("lista");
let adauga = document.getElementById("adauga");

adauga.addEventListener("click",function()
{
    let p =document.createElement("p");
    p.innerText="Element nou creat";
    lista.appendChild(p);

});


//adaugarea unui element intro lista
let produs=document.getElementById("produs");
let add=document.getElementById("add");
let listaa=document.getElementById("listaa");

add.addEventListener("click",()=>
{
    let li=document.createElement("li");
    li.innerText=produs.value;
    listaa.appendChild(li);
    produs.value="";
});

//modificarea atributelor
let poza=document.getElementById("poza");
let b=document.getElementById("schimba");

b.addEventListener("click",function()
{
    // poza.setAttribute("src","bulb_y.png");
    poza.src="bulb_y.png";
});

//eveniment input - se executa cind scrii ceva in cimp

let num =document.getElementById("num");
let rezultat=document.getElementById("rezultat");

num.addEventListener("input",()=>{
    if(nume.value.lenght>0)
    {
        rezultat.innerText="Ai scris"+nume.value;
    }
    else
    {
        rezultat.innerText="";
    }
});

//eveniment change - care se executa dupa ce valoare a fost schimbata
let oras =document.getElementById("oras");
let rezultatt =document.getElementById("rezultatt");

oras.addEventListener("click",()=>
{
    rezultatt.innerText="Ai ales"+oras.value;
});
//minicalculator

let a =document.getElementById("a");
let b =document.getElementById("b");
let r =document.getElementById("r");

document.getElementById("plus").addEventListener("click",function()
{
    let x =Number(a.value);
    let y =Number(b.value);
    r.innerText="Rezultat:"+(x+y);

});
document.getElementById("minus").addEventListener("click",function()
{
    let x =Number(a.value);
    let y =Number(b.value);
    r.innerText="Rezultat:"+(x-y);

});
document.getElementById("inmultire").addEventListener("click",function()
{
    let x =Number(a.value);
    let y =Number(b.value);
    r.innerText="Rezultat:"+(x*y);

});
document.getElementById("inmpartire").addEventListener("click",function()
{
    let x =Number(a.value);
    let y =Number(b.value);
    if(y===0)
    {
        r.innerText="Rezultat nu poate fi determinat";   
    }
    else{
        r.innerText="Rezultat:"+(x/y);
    }
});
