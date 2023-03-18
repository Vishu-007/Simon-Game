
var btncolor=["red","blue","green","yellow"];
var gamePattern=[];
var userClick=[];
var level=0;
var index=0; 

function nextSequence()
{
    var number=Math.floor(Math.random()*4);
    var random_color=btncolor[number];
    gamePattern.push(random_color);

$("#"+random_color).fadeIn(100).fadeOut(100).fadeIn(100);

var audio=new Audio("sounds/"+random_color+".mp3");
     audio.play();

     level++;

    $("h1").html("Level "+level);

}

function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
     audio.play();
}


$(".btn").on("click",function()
{
    var userChossenColor=$(this).attr("id");
    userClick.push(userChossenColor);
    playSound(userChossenColor);
       animatePress(userChossenColor);
    setTimeout(function()
    {
        $("#"+userChossenColor).removeClass("pressed");
    },160);
    

if(userClick[index]==gamePattern[index] && index<gamePattern.length-1)
{
    index++;
}

else if(userClick[index]==gamePattern[index] && index==gamePattern.length-1)
{
    userClick=[];
    index=0;
   setTimeout(nextSequence,600);
}

else if(userClick[index]!=gamePattern[index])
{
    startOver();
}
});

function animatePress(curentColor)
{
    $("#"+curentColor).addClass("pressed");
}


$(document).on("keydown",function()
{
    nextSequence();
});

function startOver()
{
    $("body").addClass("game-over");
    $("h1").html("Game Over, Press Any Key to Restart");
    setTimeout(function()
    {
        $("body").removeClass("game-over");
    },240);
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    level=0;
    index=0;
    userClick=[];
    gamePattern=[];
}