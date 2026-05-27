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
const person={
    name:'steven'
};

console.log(person.constructor);