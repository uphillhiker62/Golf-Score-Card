
let numPlayers = 4;
let course;

loadDoc();

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            course = JSON.parse(this.responseText);
            console.log(course);
            let selectTees = course.holes[0].tees;
            for(let t = 0; t < selectTees.length; t++);
                $("#teeSelection").append("<option value='" + t + "'>" + selectTees[t].teeName + "</option>");


            //createCard();
        }
    };
    xhttp.open("GET", "holes.txt", true);
    xhttp.send();
}


function createCard(){
    for(let i = 0; i < course.holes.length; i++){
        $(".bottom").append("<div id='row"+ i +"' class='holeRow'><div class='rowHead'>"+ course.holes[i].name +"</div></div>");


    }

    fillCard();
}

function fillCard(){
    for(let p = 1; p <= numPlayers; p++){
        $(".top").append("<div class='playerLabel' contenteditable='true'>Player " + p + "</div>");
        for(let h = 0; h < course.holes.length; h++){
            $("#row" + h).append("<input class='holeInput' id='p"+ p +"h"+ h +"' type='text'>");
        }
    }
}






