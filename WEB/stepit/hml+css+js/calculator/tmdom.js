

const display =document.querySelector('.display');
const butoane =document.querySelectorAll('.btn');

let numarActual=0;
let operatorStocat=null;
const operatori = ["+", "-", "/", "*"];

butoane.forEach((buton)=>
{
    buton.addEventListener('click', ()=>
        {
            const valoare=buton.textContent;
            if (valoare === '=') 
            {
                const numarNou = Number(display.textContent);
                
                if (operatorStocat === '+') rez = numarActual + numarNou;
                else if (operatorStocat === '-') rez = numarActual - numarNou;
                else if (operatorStocat === '*') rez = numarActual * numarNou;
                else if (operatorStocat === '/') rez = numarActual / numarNou;
                
                display.textContent = rez;
                rez = 0;
                operatorStocat=null;
            } 
            else if (operatori.includes(valoare)) 
            {
            numarActual = Number(display.textContent);
            operatorStocat = valoare;
            display.textContent = '';
            } 
            else {
                display.textContent += valoare;
            }
        
            
        });
});
