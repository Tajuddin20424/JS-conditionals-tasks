/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

function calculateTicketFare (age, isStudent){
    const regularFare =  800;
    if (age < 10){
        return 0;

    }
    else if (isStudent){
        return regularFare * 0.5;
    }
    else if (age >= 60){
        return regularFare * 0.85;
    }
    else{
        return regularFare ;
    }   

}

console.log (calculateTicketFare (8 , false));
console.log (calculateTicketFare (15 , false));
console.log (calculateTicketFare (65 , false));
console.log (calculateTicketFare (30 , false));




