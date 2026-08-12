// //console.log('JS functioneaza');

// //identificarea dupa id

// // let titlu=document.getElementById("titlu");

// // //console.log(titlu)

// // titlu.innerText='Bun venit la ora de DOM!!!'

// // document.getElementById("titlu").innerText="JS";
// // document.getElementById("titlu1").innerText="Un alt text";

// // document.getElementById("zona").innerHTML="<h2>Titlu creat din JS</h2>"

// // document.getElementById("zona2").innerHTML="<p style='color:red'>Titlu creat in JS</p>"


// // //selectarea cu querySelector-este mai moderna
// // let t=document.querySelector("#titlu");//identificarea prin id
// // let p=document.querySelector(".text");//identificarea prin clasa
// // t.innerText="Text modificat prin query selector";
// // p.innerText="Paragra modificat prin query selector";

// // //selectarea mai multor elemente
// // let elemente=document.querySelectorAll(".item");
// // //console.log(elemente);
// // for(let i=0;i<elemente.length;i++)
// // {
// //     console.log(elemente[i].innerText);
// // }
// // elemente.forEach(function(el){console.log(el.innerText);});

// // //modificarea stilului css in JS
// // titlu1.style.color="blue";
// // titlu1.style.backgroundColor="yellow";
// // titlu1.style.fontSize="40px";


// titlu2.style.fontSize="50px";
// titlu2.style.color="white";
// titlu2.style.backgroundColor="grey";

// pag.style.fontSize="20px";
// pag.style.color="white";
// pag.style.backgroundColor="grey";


// //eveniemente in DOM




//AddEventListener
let buton=document.getElementById("btn");
let rezultat=document.getElementById("rezultat");

buton.addEventListener("click",function()
{
    rezultat.innerText="Butonul a fost tastat"; 
    rezultat.style.color="red";
});
let numar=document.getElementById("numar");
let input=document.getElementById("nume");
let button=document.getElementById("btnn");
let rezzultat=document.getElementById("rezzultat");

button.addEventListener("click",function()
{   let n=Number(numar.value);
    if(n%2===0)
    {
        rezultat.innerText="Salut,"+input.value+",numarul este par";
    }
    else
    {
        rezultat.innerText="Salut,"+input.value+",numarul este impar";
    }
    rezultat.innerText="Salut, "+input.value;
    input.value='';
    numar.value='';
});