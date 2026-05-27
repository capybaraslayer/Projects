// console.log(true||true);
// console.log(false||true);//true
// console.log(true||false);//true
// console.log(false||false);//false


// let areRezervare=true;
// let acceptareIon=false;

// const acceptarelaMasa=areRezervare||acceptareIon;
// console.log(acceptarelaMasa);
// let a =null;
// const result= (a!==null && a !==undefined)?a:false
// console.log(result);

// let userculoare='blue';
// let deafultculoare='green'

// const currentwebsiteCuloare=userculoare||deafultculoare
// console.log(currentwebsiteCuloare)
// let n =5+5*3
// console.log(n)


// let pretulciocolatei=1.99;
// let cantitateainCash=5;

// const poateCumpareCiocolata=pretulciocolatei>=cantitateainCash;
// // console.log(typeof poateCumpareCiocolata)
// if (poateCumpareCiocolata){
//     console.log('Bucurate de ce tiai cumparat!')
// }else{
//     console.log('Ne pare rau nu ai destui bani')
// }
// let ore=10;
// if(ore>=6&& ore <=10){
//     console.log('Se serverste breakfast')
// }else{
//     if(ore>=11&& ore <=18){
//         console.log('se serveste pranz')
//     }else{
//         console.log('se serveste cina')
//     }
// }
// let ore=15
// if(ore >=6 && ore<=12){
//     console.log('se serverste brealfast')
// }else if(ore>=12 && ore <=14){
//     console.log('se serveste pranzu')
// }else{
//     console.log('se serveste cina')
// }

// let job='software developer'
// // if(job==='software developer'){
// //     console.log('writes code');
// // }else if(job==='Designer'){
// //     console.log('Deseneaza');
// // }else if(job==='Cloud Engineer'){
// //     console.log('Manages and deploys cloud resources');
// // }else{
// //     console.log('lucreaza direct cu customers');
// // }
// switch(job){
//     case 'Software Developer':
//     console.log('writes code');
//     break;
//     case 'Designer':
//     console.log('Deseneaza');
//     break;
//     case 'Software Developer':
//     console.log('writes code');
//     break;
//     case 'Software Developer':
//     console.log('writes code');
//     break;
//     default:
//         console.log('lucreaza direct cu customers')
// }
// let numbers= [1,2,3,4,5,6,7]
// let idx=0;
// let lungimeArraz=numbers.length;

// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx]);

// for(let idx=0;idx<numbers.length;idx++){
//     console.log(numbers[idx]);

// // }
// for(let num=0;num<100;num++){
//     console.log(num);
// }
// let numbers=[1,2,3,4,5,6,7];
// for(let idx=0;idx<numbers.length;idx++){
//     console.log(numbers[idx])
// }
// let idx=0
// while (idx<numbers.length){
//     console.log(numbers[idx]);
//     idx++;
// }
// let sum=0;
// while(true){
//     console.log('Loop');
//     sum++;
//     if (sum===10){
//         break;
//     }
// }

// let i =0
// do{
//     console.log(i)
//     i++;
// }while(i<10)

// const course={
//     nume:'javascipt',
//     ore:3,
//     sectiuni:9
// }
// console.log(course.nume)
// console.log(course['nume'])
// for(const key in course){
//     console.log(course[key])
// }
// let numbers=[1,2,3,4,5]
// for(let element of numbers){
//     console.log(element)
// }

// for(let i=0;i<10;i++){
//     if(i===5){
//         break;//daca exista 5 se opreste loopu
//     }
//     console.log(i)
// }

// let i=0;
// while(i<10){
//     if(i===5){
//         break;
//     }
//     console.log(i);
//     i++;

// }
// let i=0;
// do{
//     if(i===5){
//         break;
//     }
//     console.log(i);
//     i++;

// }while(i<10);
// const obj={a:1,b:2,c:3};
// for(let key in obj){
//     if (key==='b'){
//         break;
//     }
//     console.log(obj[key])
// }
// const arr=[1,2,3,4,5,6]
// for(let element of arr){
//     if(element ===3){
//         break;
//     }
//     console.log(element);
// } 
// 

// let i=0;
// do{
//     i++;
//     if(i%2===0){
//         continue;
//     }
//     console.log(i);
// }while(i<10);

// const obj={
//     a:1,b:2,c:3
// }
// for(let key in obj){
//     if(obj[key]%2===0){
//         continue;
//     }
//     console.log(obj[key])
// }
// const arr=[1,2,3,4,5,6]
// for(let element of arr){
//     if(element%2===0){
//         continue;
//     }
//     console.log(element);
// }
// function numarMax(num1,num2){
//     return num1>=num2  ? num1:num2;
// }
// console.log(numarMax(3,1))
// function fizzbuz(number){

//     if(number %3===0 && number%5===0)
//         return 'FizzBuzz';
//     else if(number%3===0)
//         return "Fizz";
//     else if(number%5===0)
//         return "Buzz";
//     else
//         return number;

// }
// console.log(fizzbuz(15))

function displayevennumbers(array){
    for(const number of array){
        if(number%2!=0){
            console.log(number)
        }

    }
}
displayevennumbers([2,3,2,13,4,12])