
const myDetails = (fName, lName, age) => {
    return [fName, lName ,age]
};


const myNewDetails =  myDetails('Bright', 'Philip', '17');


const processDetails = (message1, message2, message3) => {
    return `${message1} ${myNewDetails[0]} ${myNewDetails[1]} ${myNewDetails[0]}` 


};

console.log(processDetails('My name is : ', 'I am ' , 'old'));