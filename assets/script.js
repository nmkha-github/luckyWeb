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

cards = [{isFlipped: false, point: 0}, 
         {isFlipped: false, point: 0},
         {isFlipped: false, point: 0},
         {isFlipped: false, point: 0},
         {isFlipped: false, point: 0},
         {isFlipped: false, point: 0}];

cnt = 0;
function flip(n){
    if (cnt >= 3 || cards[n]['isFlipped']) return true;
    cnt++;
    cards[n]['isFlipped'] = true;
    document.querySelectorAll("#game-screen .card-inner")[n].style.transform = 'rotateY(180deg)';
}