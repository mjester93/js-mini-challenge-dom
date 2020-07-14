/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = 'red';

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS);

const playerContainer = document.querySelector('.player-container');
console.log(playerContainer);

for (let i=0; i<PLAYERS.length; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'player');
    div.setAttribute('data-number', PLAYERS[i]['number']);

    let h3 = document.createElement('h3');
    h3.innerHTML = `${PLAYERS[i]['name']} (<em>${PLAYERS[i]['nickname']})`

    let img = document.createElement('img');
    img.setAttribute('src', `${PLAYERS[i]['photo']}`);
    img.setAttribute('alt', `${PLAYERS[i]['name']}`);

    div.appendChild(h3);
    div.appendChild(img);
    playerContainer.appendChild(div);
}

/***** Deliverable 4 *****/
const player = playerContainer.removeChild(playerContainer.querySelector("div[data-number='7']"));