function myfunction()
{
    var randomNumber1=Math.floor(Math.random()*6)+1;
    var randomNumber2=Math.floor(Math.random()*6)+1;
    var randomImage1="dice"+randomNumber1+".png";
    var randomImage2="dice"+randomNumber2+".png";
    document.querySelectorAll("img")[0].setAttribute("src","images/"+randomImage1);
    document.querySelectorAll("img")[1].setAttribute("src","images/"+randomImage2);
    if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player1 Wins!"
    }
    else if(randomNumber1===randomNumber2)
    {
        document.querySelector("h1").innerHTML="Draw!"

    }
    else{
        document.querySelector("h1").innerHTML="Player2 Wins!"

    }
}