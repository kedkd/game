function startGame(){
    gameLoop();
}


var count = 0;
var personVis = false;
var score = 0; // переменная которая будет отсчитывать количество очков

function gameover(){
    var newItem = document.createElement("h2");
    newItem.innerHTML = document.getElementById(score)

    document.getElementById(score).appendChild("bb"+score);
}

gameover()

function gameLoop(){
    personVis = ! personVis;
    if (personVis == true){
        var classToset = "character visible";
    }
    else{
        var classToset = "character hidden";
    }

    var gamezone = document.getElementById("gameZone");

    for( i = 0; i<8; i++){
        gamezone.children[i].className = classToset;
        gamezone.children[i].innerHTML = "Персонаж"

        // минус 2 балла, если кликнули не туда
        gamezone.children[i].onclick = function(){score -= 2;}

    }

    var randomNum = Math.floor(Math.random()*8) + 1;
    gamezone.children[randomNum-1].innerHTML = "Лишний";
    gamezone.children[randomNum-1].className = classToset +" naruto";
    
    // плюс 1 балл, если клинкули правильно
    gamezone.children[randomNum-1].onclick = function(){score += 1;}
    
    
    count++;

    if (count < 12){
        // setTimeout(gameLoop,3000);
        setTimeout(gameLoop, personVis ? 1000:3000)
    }

    else{
        alert("Игра окончена");
        
    }

    
    

    
}