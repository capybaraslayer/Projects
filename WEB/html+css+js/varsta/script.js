const input=document.querySelector('.form');
const btn=document.querySelector('.calc');
const varsta_ani=document.querySelector('.ani');
const varsta_luni=document.querySelector('.luni');
const varsta_zile=document.querySelector('.zile');
function afiseaza(){
    if(!input.value){
         alert('Introdu data nasteri');
    };
    let dataCurenta=new Date();
    let dataNast=new Date(input.value);
    let ani=dataCurenta.getFullYear()-dataNast.getFullYear();
    let luni=dataCurenta.getMonth()-dataNast.getMonth();
    let zile=dataCurenta.getDate()-dataNast.getDate();
    varsta_ani.textContent=ani;
    varsta_luni.textContent=luni;
    varsta_zile.textContent=zile;
};

// input.addEventListener('input',afiseaza);
btn.addEventListener('click',afiseaza);