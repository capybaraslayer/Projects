

function genereazaCod(lungime=4)
{
   const caractere = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
   let cod='';
   for(let i =0;i<lungime;i++)
   {
    cod+=caractere[Math.floor(Math.random()*caractere.length)];
   }
   return cod;
}

function deseneazaCapthca(cod)
{
    const canvas =document.getElementById('captcha-canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0,0,canvas.clientwidth,canvas.height);
    ctx.font='24px Arial';
    ctx.fillStyle='black';
    ctx.fillText(cod,15,28);
}