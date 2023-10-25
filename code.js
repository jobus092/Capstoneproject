

function moFunction(){
    document.getElementById("AboutMeText").style.backgroundColor="red"
}

const myTimeout = setTimeout(timer, 5000);

function timer(){
  document.getElementById("timeout").style.backgroundColor="blue"
}

function newFunction(){
    document.getElementById("inner").innerHTML="My name is Henry, I am blind and deaf, and I dream of being a competitive pole dancer when I grow up";
}