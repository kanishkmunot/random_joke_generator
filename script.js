const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=religious,racist,sexist&type=single';


let getJoke = ()=>{
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
    });
}

btn.addEventListener('click',getJoke);
getJoke();