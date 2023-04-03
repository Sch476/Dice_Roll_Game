var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceNumber1="dice"+randomNumber1+".png";
var randomSource1="images/"+randomDiceNumber1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceNumber2="dice"+randomNumber2+".png";
var randomSource2="images/"+randomDiceNumber2;
// console.log(randomNumber1);
document.querySelectorAll('img')[0].setAttribute("src",randomSource1);
document.querySelectorAll('img')[1].setAttribute("src",randomSource2);
if(randomDiceNumber1>randomDiceNumber2)
{
    document.querySelector('h1').innerHTML = "🚩Winner 1!";
}
else if(randomDiceNumber1<randomDiceNumber2)
{
    document.querySelector('h1').innerHTML ="Winner 2!🚩";
}
else
{
    document.querySelector('h1').innerHTML ="Draw!";
}