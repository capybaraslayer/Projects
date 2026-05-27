// const dog={
//     name:'max',
//     breed:'Dachsund',
//     age:5,
//     kg:12,
//     eat:function(){
//         console.log('Hrrr')
//     },
//     bark(){
//         console.log('Ham')
//     }
// }
// const altcaine={
//     name:'Marlie',
//     breed:'Sasisca',
//     age:3,
//     kg:10,
//     eat:function(){
//         console.log('Hrrr')
//     },
//     bark(){
//         console.log('Ham')
//     }
//}
// function getDog(name,breed,age,weightinPounds){
//     return{
//         name,
//         breed,
//         age,
//         weightinPounds,
//         eat(){
//             console.log('Chomp');
//         },
//         bark(){
//             console.log('Ham');
//         }

//     }
// }

// const anotherDog=getDog('Marlie','husly',10,12);
// console.log(anotherDog);
//  function getDog(name,breed,age,weightinPounds){
//     return{
//         name,
//         breed,
//         age,
//         weightinPounds,
//         eat(){
//             console.log(this.name+': Chomp');
//         },
//         bark(){
//             console.log(this.name+': Ham');
//         }

//     }
// }
// function caine(name,breed,age,weightinPounds){
//     //this{ };
//     //adaugam proprietati la this
//     this.name=name;
//     this.breed=breed;
//     this.age=age;
//     this.weightinPounds=weightinPounds;
//     this.eat=function(){
//         console.log(this.name+': Chomp');
//     }
//     this.bark=function(){
//           console.log(this.name+': Ham');
//     }

//     //return this;
    
// // }
// // const anotherDog=new caine('Sasiska','Lab',2,41);
// // console.log(anotherDog)
// const person={
//     name:'Steven'
// };
// // console.log(person);
// // person.favoriteFood='tacos'
// // console.log(person)
// // delete person.favoriteFood;
// // console.log(person);

// person.eat=function(){
//     console.log('start eating');
// }
// person.eat();
// person={

// };
// const person={
//     name:'steven'
// };

// console.log(person.constructor);
// let newObj={}
// let newObj=new Object();
// new String();
// new Boolean();
// new Number();
// function add(num1,num2){
//     return num1+num2;
// }
// // const n =add;
// // console.log(n(2,3));
// console.log(add.length);

// function Programer(name){
//     this.name=name;
//     this.writeCode=function(){
//         console.log('Code in js')
//     }
// }

// console.log(Programer.length);
// const Programer=new Function('name',`
//     this.name=name;
//     this.writeCode=function(){
//     console.log('Code in js')
//      }`);

// const newProgramer=new Programer('Steven');
// newProgramer.writeCode();
// console.log(newProgramer.constructor);

// let a =10;
// let b=a;

// a=20;

// console.log(a);
// console.log(b);

// let a ={value:20};
// let b=a;

// a.value=100;

// console.log(a);
// console.log(b);

// let numbers=[1,2,3,4,5,6]
// for (const element in numbers){
//     console.log(element);
// }

const dog={
    name:'Max',
    age:4,
    culoareOchilor:'albastrii'
};
// for(const key in dog){
//     console.log(dog[key]);
// }


const keys=Object.keys(dog);
// console.log(keys);
const values=Object.values(dog);
//console.log(values);
const entrees =Object.entries(dog);
// console.log(entrees);

// for(const key of Object.keys(dog)){
//     console.log(key);
// }

// for(const value of Object.values(dog)){
//     console.log(value);
// }

for(const entry of Object.entries(dog)){
    console.log(entry);
}