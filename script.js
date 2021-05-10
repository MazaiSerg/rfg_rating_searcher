let playerList = document.querySelector('.search-results');
let playerCardTemplate = document.querySelector('#player-card-template').content;
let newPlayerCard = playerCardTemplate.querySelector('.player-card');

function createPlayers(playerData) {
    let player = newPlayerCard.cloneNode(true);

    let playerName = player.querySelector('.player-name');
    let playerRating = player.querySelector('.player-rating');
    let playerDate = player.querySelector('.player-last-tournament-date');

    playerName.textContent = playerData.name;
    playerRating.textContent = 'Рейтинг: ' + playerData.rating;
    playerDate.textContent = 'Дата последней игры: ' + playerData.lastTournamentDate;
    return player;
}

let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000', true);
xhr.send();


xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) {
        return
    }

    if (xhr.status === 200) {
        addPlayers(JSON.parse(xhr.responseText));
    } else {
        console.log('err', xhr.responseText)
    }
}

function addPlayers(playersArray) {
    playersArray.players.map(player => playerList.appendChild(createPlayers(player)))
}