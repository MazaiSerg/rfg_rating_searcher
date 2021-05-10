let playerList = document.querySelector('.search-results');
let playerCardTemplate = document.querySelector('#player-card-template').content;
let newPlayerCard = playerCardTemplate.querySelector('.player-card');

function createPlayers() {
    let player = newPlayerCard.cloneNode(true);

    let playerName = player.querySelector('.player-name');
    let playerRating = player.querySelector('.player-rating');
    let playerDate = player.querySelector('.player-last-tournament-date');

    playerName.textContent = 'Шикшин Илья';
    playerRating.textContent = '2700';
    playerDate.textContent = '12.05.2022';
    return player;
}

playerList.appendChild(createPlayers());

let xhr = new XMLHttpRequest();
xhr.open('GET', '127.0.0.1:3000', true);
xhr.send();


xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) {
        return
    }

    if (xhr.status === 200) {
        console.log('result', JSON.parse(xhr.responseText))
    } else {
        console.log('err', xhr.responseText)
    }
}