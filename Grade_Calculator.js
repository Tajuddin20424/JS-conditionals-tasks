/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

function calculateGrade (score){
    let grade;
    if (score >= 90 && score <= 100){
        grade = 'A';
    }
    else if (score >= 80 && score < 90){
        grade = 'B';
    }
    else if (score >= 70 && score < 79){
        grade = 'c';
    }
    else if (score >= 60 && score < 69 ){
        grade = 'D';
    }
    else if (score >= 0 && score < 59){
        grade = 'F';
    }
    return grade;
}
// let score = prompt("Enter your score :");
// alert("Your grade is: " +calculateGrade(parseInt(score)));


console.log(calculateGrade(80));
  



