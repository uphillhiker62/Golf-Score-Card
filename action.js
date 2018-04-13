
let golfHoles = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let numPlayers = 30;


function createCard(){
    for(let i = 0; i < golfHoles.length; i++){
        $(".right").append("<div id='col"+ i +"' class='column'><div class='cHead'>"+ (i + 1) +"</div></div>");


    }

    fillCard();
}

function fillCard(){
    for(let p = 1; p <= numPlayers; p++){
        $(".left").append("<div class='playerLabel' contenteditable='true'>Player " + p + "</div>");
        for(let h = 0; h < golfHoles.length; h++){
            $("#col" + h).append("<input class='holeInput' id='p"+ p +"h"+ h +"' type='text'>");
        }
    }
}






