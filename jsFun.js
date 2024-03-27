

// === JS NATIVE FUNCTION =====

// ======= parameters and arguments ============
function addition(num1, num2, num3) {
    const result = num1 + num2 + num3;
    return result;
}

// ======= Function Call ====
// console.log(addition(20, 20, 30))


// ========== JS ARROR FUNCTION =======

const addition2 = (num1, num2) => {
    console.log(num1 + num2)
} 

// addition2(40 , 60)





function addition3(num1, num2, num3) {
    const result = num1 + num2 + num3;
    return result;
}


// ======= Function Call ====
console.log(
    addition3(
        Number(prompt("Enter number1")),
        Number(prompt("Enter number2")),
        Number(prompt("Enter number3"))
    )
)