
// if 
// else if 
// else 


// || pipe
// && and

// === 
//<=
// >=

const originalScore = 150 

const firstExam = Number(prompt('Enter First Exam Score'))
const secondExam = Number(prompt('Enter Second Exam Score') )
const thirdExam = Number(prompt('Enter Third Exam Score') )


const userScore = firstExam + secondExam + thirdExam

if(userScore <= 50 ){
    console.log(`user Score is: ${userScore} and u failed`)
}



else if(userScore > 50 && userScore <= 100){
    console.log(`user Score is: ${userScore} and u pass`)
}


else if(userScore > 100 && userScore <= 150){
    console.log(`user Score is: ${userScore} Excellent and u pass`)
}

else{
    console.log(`user Score is: ${userScore} is not valid`)
}
