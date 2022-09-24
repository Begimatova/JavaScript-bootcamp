// TASK-1 START

// const a = 7 ;
// const b = 8;
// alert(a+b);

// TASK-1 END 






// TASK-2-3-4-5-6 START

// let userName = ''
// let userSecondName = ''
// let userWorkingDay = ''
// let userSalary = ''

// while (
//     userName === '' ||
//     userSecondName === '' ||
//     userWorkingDay === '' ||
//     userSalary === ''
// ) {
//     userName = prompt('enter your name: ')
//     if(userName === 'Андрей' || userName === 'Иван' || userName === 'Айдар'){
//             while(userName === 'Андрей' || userName === 'Иван' || userName === 'Айдар'){
//                 alert('YOU ARE NOT ALLOWED!')
//                 userName = prompt('enter your name: ') 
//             }
//     }
//     if(userName === ''){
//         alert('INCORRECT! PLEASE ENTER YOUR NAME!')
//         while(userName === ''){
//             userName = prompt('enter your name: ') 
//         }
//     }
//     userSecondName = prompt('enter your second name: ')
//     if(userSecondName === ''){
//         alert('INCORRECT! PLEASE ENTER YOUR SECOND NAME!')
//         while(userSecondName === ''){
//             userSecondName = prompt('enter your second name: ')
//         }
//     }
//     userWorkingDay = prompt('enter count of your working days: ')
//     if(userWorkingDay === ''){
//         alert('INCORRECT! PLEASE ENTER COUNT OF YOUR WORKING DAYS!')
//         while(userWorkingDay === ''){
//             userWorkingDay = prompt('enter count of your working days: ')  
//         }
//     }
//     userSalary = prompt('enter your salary')
//     if(userSalary === ''){
//         alert('INCORRECT! PLEASE ENTER YOUR SALARY!')
//         while(userSalary === ''){
//             userSalary = prompt('enter your salary')
//         }
//     }
// }
// const resultSalary = (userSalary/24)*userWorkingDay
// alert('Your salary: '+ resultSalary.toFixed(0)) 

// const worker = {
//     name: userName,
//     secondName: userSecondName,
//     workingDay: userWorkingDay,
//     salary: userSalary,
// }

// for (const [key, value] of Object.entries(worker)) {
//     console.log(key + ':' + value.toLowerCase());
// }

// console.table(worker)

// TASK-2-3-4-5-6 END








// TASK-7 START

// function myFunction(a,b){
//     return a+b
// }
// console.log(myFunction(15,52))

// TASK-7 END








// TASK-8 START

// let a
// let b
//  function myFunction(a,b){
//     let result=1
//     for(let i=0; i<b; i++){
//         result = result*a
//     }
//     return result;
//  }
//  console.log(myFunction(4,3))

// TASK-8 END







// TASK-9 START

// let a = prompt('enter first number: ')
// if(isNaN(Number(a))) {
//     alert('incorrect input! Shoud be number!')
// }
// let b = prompt('enter second number: ')
// if(isNaN(Number(b))) {
//     alert('incorrect input! Shoud be number!')
// }
// let operator = prompt('enter mathematic operator: ')
// if(operator === '+'){
//    alert(Number(a) + Number(b))
// }
// else if(operator === '-'){
//     alert(Number(a) - Number(b))
//  }
//  else if(operator === '*'){
//     alert(Number(a) * Number(b))
//  }
//  else if(operator === '/'){
//     alert(Number(a) / Number(b))
//  }
// else{
//     alert('INCORRECT OPERATOR! PLEASE TRY AGAIN!')
// }

// TASK-9 END


