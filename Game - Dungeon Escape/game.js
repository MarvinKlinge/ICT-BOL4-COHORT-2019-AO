var startGame = confirm ("You wake up in an Dungeon prison, The cell wasn't even locked, Now it's your job to escape this Dungeon!\n\nPress OK to continue");

if (startGame == true) {
var room1 = prompt ("The shady room has 3 big door's.\n\n1. Take the big yellow door\n2. Take the green sliding door\n3. Take the purple hobbit door");
    if (room1 == 1) {
    
    //choose door 1 in room 1
    alert("You Pushed against the big and heavy door");            
        var room2 = prompt ("You enter an large empy room with 2 other doors. Wich door do you take?");
        if (room2 == 2) {
        //choose door 2
        alert("Then you enterd the great hall way with an other 3 doors");
}
        if (room2 == 1) {
        //choose door 1 in room 2
        alert("*You enter the kitchenroom");
        alert("*colonel sanders was in the room too*");
        alert("COLONEL SANDERS: Hey there little chum, have you ever envisioned to become a delicious chicken nugget?");
        alert("COLONEL SANDERS: Well today is your luky day!");
        alert("*colonel sanders trew you in a big tub of boiling frying oil*");
        alert(" >YOU DIED< press F5 to play again");  
}}
    if (room1 == 2) {
    //choose door 2 in room 1
    alert("You opend");
        var room2 = prompt ("You enter a tiny circular room with 2 other doors. Wich door do you take?");
        if (room2 == 1) {
        //choose door 1
        alert("*While stepping through the door you tripped over the doorstep and Decapitaded your own neck!*");
        alert(" >YOU DIED< press F5 to play again");
}
        if (room2 == 2) {
        //choose door 2
        alert("You steped into an girl's bedroom, the cute little girl is playing with her dolls");
        alert("GIRL: hello there mister, do you want to play togeter with my toys?");
         
            var room2 = prompt ("Are you gonna play with the girl?\n\nYes or No");
            if (room2 == Yes) {
            alert("Girl: NOBODY THOUCHES MY TOYS!!!");
            alert("the little girl wipped out an revolver and shot you straight trough your head");
            alert(" >YOU DIED< press F5 to play again");
        }
            if (room2 == No) {
            alert("Girl: NO!?! I DON'T LIKE YOU ANYMORE!!!");
            alert("the little girl wipped out an revolver and shot you straight trough your head");
            alert(" >YOU DIED< press F5 to play again");
}}}
    if (room1 == 3) {   
    //choose door 3
    alert("BIG");
        var room2 = prompt ("You enter a long and dark hallway with 3 other doors. Wich door do you take?");
        if (room2 == 1) {
        //choose door 1
        alert("You step trough the door and you see that there's noting in this room");
        alert("But when you wanted to go back the door was locked and you can't get out");
        alert("After days being locked in the room you starved of starvation!");
        alert(" >YOU DIED< press F5 to play again");
}
        if (room2 == 2) {
        //choose door 2
        alert("...");
        alert(" >YOU DIED< press F5 to play again");
}
        if (room2 == 3) {
        //choose door 1
        alert("...");
        alert(" >YOU DIED< press F5 to play again");
}}

else {
        alert("ANOUNSER: so you don't wanna escape!");
        alert("ANOUNSER: well it's your choise!");
        alert("*you had gotten infected with ligma and you died of it!*");
        alert(" >YOU DIED< press F5 to play again");   
}}