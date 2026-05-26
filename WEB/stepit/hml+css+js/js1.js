console.log('Fisierul js functioneaza');
console.log(5*3);
// let nume='Ion';
// let varsta=20;
//comentariu de rand
//tipuri de variabile var;let;const;
// var nume='Ion';
let varsta=20;
const tara='Moldova';
console.log(varsta);
varsta=varsta+20;
console.log(varsta);
//tipuri de date
//1.Number
let virsta=25;
let prett=99.9;
let temperatura=-2;
//2.String
let nume='maria';
let oras='Chisinau';
let salut='salut'+' '+nume+'!!!';
console.log(salut)
//3.boolean
let estestudent=true;
let arepermis=false;
console.log(arepermis);
//null-gol intentionat
let telefon=null;
console.log(telefon);
//undefined - varianta declarata dar fara valoare
let adresa;
console.log(adresa);

//operatorii aritnmetici 
//+ - * / % 
let a=10;
let b=7;
console.log(a+b);
console.log(11%2);
// a+=3; a=a+3
//operatori de comparare
console.log(10>5);
console.log(10<=5);
console.log(10==5);
console.log(10=='10');//true
console.log(10==='10');//false



let pret=-10;
let reducere=5;
if((pret>0)&&(reducere>0))
{
    let pretreducere=pret*(reducere/100);
    let pretFinal=pret-pretreducere;
    console.log('reducere este:'+pretreducere);
    console.log('pretfinal este:'+pretFinal);
}else{
    console.log('pret invalid!')
}


//
let varstaa=15;
let arebilet=true;
if(varstaa>=18 && arebilet){
    console.log('Intrare permisa')
}else{
    if (varstaa<18 && arebilet){
        console.log('minor cu bilet')
    }else{
        console.log('minor fara bilet')

    }
}


