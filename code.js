

function moFunction(){
    document.getElementById("AboutMeText").style.backgroundColor="red"
}

const myTimeout = setTimeout(timer, 2000);

function timer(){
  document.getElementById("timeout").style.backgroundColor="blue"
}

function inner(){
    document.getElementById("iHtml").innerHtml="I live in Norway and I don't go to school. I hope to one day become a racecar driver";
}