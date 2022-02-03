function readTextFile(path)
{
    var rawFile = new XMLHttpRequest();
    var result = "";
    rawFile.open("GET", path, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                result = allText;
            }
        }
    }
    rawFile.send(null);
    return result;
}
var a;
a = readTextFile("config/startScreen/title.txt");
document.getElementsByClassName("title-content")[0].innerHTML = a;
a = readTextFile("config/startScreen/button1.txt");
document.getElementById("start-button").innerHTML = a;
a = readTextFile("config/startScreen/button2.txt");
document.getElementById("intro-button").innerHTML = a;

function starting(){
    element = document.getElementById("start-screen");
    element.style.display = "none";
    element = document.getElementById("game-screen");
    element.style.display = "block";
}
function intro(){
    element = document.getElementById("start-screen");
    element.style.display = "none";
    element = document.getElementById("intro-screen");
    element.style.display = "flex";
}
function backToStart(){
    element = document.getElementById("intro-screen");
    element.style.display = "none";
    element = document.getElementById("start-screen");
    element.style.display = "block";
}

document.querySelector("#game-screen .title-content").innerHTML = readTextFile('config/mainScreen/title.txt');
cards = [{isFlipped: false, point: 0}, 
         {isFlipped: false, point: 0},
         {isFlipped: false, point: 0},
         {isFlipped: false, point: 0},
         {isFlipped: false, point: 0},
         {isFlipped: false, point: 0}];

cnt = 0;
userPoints = 0;
function flip(n){
    if (cards[n]['isFlipped'] || cnt >= 3) return true;
    cnt++;
    cards[n]['isFlipped'] = true;
    point = Math.floor(Math.random() * 100) + 1; 
    userPoints += point;
    document.querySelectorAll("#game-screen .card-back h2")[n].innerHTML = point.toString();
    document.querySelectorAll("#game-screen .card-inner")[n].style.transform = 'rotateY(180deg)';
    if (cnt == 3){
        scoreBoard();
        return true;
    }
}

a = readTextFile("config/mainScreen/scoreBoard/title.txt");
document.querySelectorAll("#score-board .title")[0].innerHTML = a;
function scoreBoard(){
    document.getElementById("score-board").style.display = "flex";
    document.querySelector("#score-board .content .before").innerHTML = readTextFile("config/mainScreen/scoreBoard/beforePoint.txt");
    document.querySelector("#score-board .content .after").innerHTML = readTextFile("config/mainScreen/scoreBoard/afterPoint.txt");
    document.querySelector("#score-board .content .points").innerHTML = userPoints.toString();
}
function playAgain(){
    document.getElementById("score-board").style.display = "none";
    cnt = 0;
    userPoints = 0;
    for (var i = 0; i < 6; i++) {
        if (cards[i]['isFlipped']){
            cards[i]['isFlipped'] = false;
            document.querySelectorAll("#game-screen .card-inner")[i].style.transform = 'none';
        }
    }

}