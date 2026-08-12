const input=document.querySelector('.caseta_alba');
const divParinte=document.querySelector('.raspuns_list')
input.addEventListener('input',()=>{
    const cuvinte=input.value.split(',');

    const cuvinteUnice= new Set(cuvinte.map(c =>c.trim()).filter(c=>c!==""));

    if(divParinte!==undefined && divParinte !==null){
    divParinte.innerHTML='';
    for(const cuvant of cuvinteUnice){
            const divCopil=document.createElement('div');
            divCopil.classList.add('text');
            divCopil.innerText=cuvant;
            divParinte.appendChild(divCopil);
        }

    }
    
    
});

