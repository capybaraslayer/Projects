const btn=document.getElementById('cauta');
const input =document.getElementById('nume');
const lista =document.getElementById('rezultate');
const detalii =document.getElementById('carte');
let carti =[];

async function numeCarte(id){
    try{
        const response= await fetch('https://gist.githubusercontent.com/nanotaboada/6396437/raw/books.json')
        if(!response.ok){throw new Error(`Eroare HTTP:${response.status}`)};
        const data = await response.json();
        carti =data.books;
    }catch(eroare)
    {   
        const elementEroare =document.createElement('p');
        eroare.classList.add('eroare');
        eroare.innerHTML='Eroare ceva nu a mers';
    }

    }

numeCarte();
input.addEventListener('input',()=>{
    const text = input.value.toLowerCase();
    lista.innerHTML ='';

    if(text==='') return;
    const rezultate = carti.filter(carte=>carte.title.toLowerCase().includes(text));
    rezultate.forEach(carte =>{
        const li =document.createElement('li');
        li.textContent=carte.title;
        li.dataset.title=carte.title;
        lista.append(li);
    });
});

lista.addEventListener('click',(e)=>{
    lista.innerHTML='';
    const title =e.target.dataset.title;
    const carte =carti.find(carte => carte.title ===title);
    afiseazaDetalii(carte);
    detalii.classList.add('displaii');
});
function afiseazaDetalii(carte)
{
    detalii.classList.remove('displaii');
   
    detalii.innerHTML=`
            <h2>${carte.title}</h2>
            <h3>${carte.subtitle}</h3>
            <p>Autor: ${carte.author}</p>
            <p>An: ${carte.published}</p>`;
};