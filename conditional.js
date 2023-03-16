var score = prompt("Type Your Jamb Score")
if (score >= 180 && score <= 400)  {
    // alert("Congratulations, You Passed")
    console.log("Congratulations, You Passed")
} else if (score >= 0 && score <180) {
    alert("You Failed")
}
else if (score >400 || score <0) {
    alert("mumu")
}

// FOR CONCATENATION
// if  (score >= 180 && score <= 400) {
//     alert("You scored " + score + ", You don pass")
// }
// var number = prompt("Type Your Number here")

// var userNumber = prompt("Type Your Number here")
// if(userNumber%2==0) {
//     alert("Even Number")
// }
//  else {
//        alert("Not an Even Number")
//    }
//    % is modulus 
//    An algorithm that figures if a number is even
//  Even number is a number that is divisible by 2 without a remainder
// UserNumber/2, the remainder == 0


// var score = Number(prompt(Enter your score));
// // alert(score)
// if(score >=180 && score <400) {
//     alert("Good")
// }