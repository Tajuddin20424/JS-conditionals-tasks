// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.




function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } 
    else if (bmi >= 18.5) {
        if (bmi <= 24.9) {
            category = 'Normal weight';
        } 
        else if (bmi <= 29.9) {
            category = 'Overweight';
        } 
        else {
            category = 'Obese';
        }
    }

    return `Your BMI is ${bmi.toFixed(2)} and you are ${category}.`;
}

console.log(calculateBMI(80 , 2.75));  
