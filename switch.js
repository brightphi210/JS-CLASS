

// create a system to ask user for three prompt 
// 1. Name 
// 2. gender 
// 3. age 

// a.) and validate if the user gender is male and and he 
// is less than 18 or greater than 40 

// he should be bounced out of the show with angry
// emoji 😒

// b) validate if the user gender is female and she 
3// is less than 17 or greater than 39

// she should be bounce out of the show with angry
// emoji 😒


const fullName = prompt('Enter name: ')
const gender = prompt('Enter gender: ')
const age = prompt('Enter age: ')

if (gender === 'male' ) {

    if(age < 18 || age > 40){
        console.log('Get out for male😒')
    }

    else if( age >= 18 || age <= 40 ){
        console.log('Welcome for male 😂')
    } 
}

else if(gender === 'female'){
    if(age < 17 || age > 39){
        console.log('Get out for this is for female😒')
    }


    else if( age >= 17 || age <= 39 ){
        console.log('Welcome for this is for female😂')
    } 
}



// i go to an airport i was ask for my name and my passcode 

// if the passcode length is > 6 or less 4 that means passcode is not correct
// and u will not be permitted to join the flight 

// if the passcode length is less than or  equal to 6 or greater than or equal 4 that means
// your passcode is correct and u will be permitted to join the flight

creve6421

// const num1 = prompt('Enter num1: ')
// const num2 = prompt('Enter num2: ')


// switch(prompt('Enter Sign')) {

//     case '-':
//       alert(`This is your result ${num1 - num2}`)
//       break;

//     case '+':
//       alert(2+1)
//       break;

//     case '/':
//         alert(2/1)
//         break;

//     default:
//       alert(2)
//   }