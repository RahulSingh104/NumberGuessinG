/*
Number Guessing Game 
computer =1 to 100
user has to guessthe number
The user gets 3 chances to do so
*/
let userConsent=confirm("Welcome to 'Guess A Number'Game.Click on Ok To play")

if(userconsent){
     let computerNumber= Math.ceil(Math.random()*10)
     let counter=0
    while(counter<5){
        let userGuessed= prompt("Please enter a number.")
        if(userGuessed==computerNumber){
            alert("WoW! you guessed the correct number")
        }
        else{
            alert("Sorry!wrong number")
        }
        counter+=1
    }
    
    if(counter==3){
      alert("Sorry!only 3 guesses allowed")
    }
    let restartOrNot= confirm("Do you want to play again?")
    if(restartOrNot){
        location.reload();
    }
      else{
        alert("Ok!May be some other time.")
      } 
    }
else{
    alert("ok! May be some other time.")

}