// // test case mocha for understanding

// class Car{
//     park()
//     {
//        return " park function invoked !"; 
//     }
//     drive()
//     {
//         return " drive function invoked ! ";
//     }
// }

// // using let bcz value of car might change
// let obj;

// // extract logic that is similar in 'it' functions.for example : no need to create object again 
// //                                                               and again in every it function

// beforeEach(()=>
// {
//   obj=new Car();  
// })
// describe('good work!',()=>
// {
//     it('good park function!',()=>
//     {
//         // const obj_drive=new Car();
//         assert.equal(obj.park()," park function invoked !")
//     })
//     it('good drive function !' ,()=>
//     {
//         // const obj_park=new Car();
//         assert.equal(obj.drive()," drive function invoked ! ")
//     })
// })