const tablePlayers = document.querySelector('#tablePlayers')
const players = [
    {
        name: 'Rafa',
        data: {
            victory: 1,
            draw: 4,
            defeat: 2,
            points: 0
        }
    },
    {
        name: 'Paulo',
        data: {
            victory: 2,
            draw: 1,
            defeat: 1,
            points: 0
        }
    },
]
let index = 0

function populatetable (players) {
    tablePlayers.innerHTML = ''
    players.forEach(player => {
        
        calculatePoints(player)
        const row = document.createElement('tr')
        row.innerHTML = `
                    <td>${player.name}</td>
                    <td>${player.data.victory}</td>
                    <td>${player.data.draw}</td>
                    <td>${player.data.defeat}</td>
                    <td>${player.data.points}</td>
                    <td><button class="victory" onClick="addVictory(${index})">Vitória</button></td>
                    <td><button class="draw" onClick="addDraw(${index})">Empate</button></td>
                    <td><button class="defeat" onClick="addDefeat(${index})">Derrota</button></td>
                    <td class="deletePlayer" onClick="removePlayer(${index})"><i class="fas fa-trash"></i></td>
        `
        tablePlayers.appendChild(row)
        index++
    })
    index = 0
}

function calculatePoints(player) {
    const { victory, draw } = player.data 
    player.data.points = victory*3 + draw*1
}

populatetable(players)


function addVictory(index) {
    players[index].data.victory++
    populatetable(players)
}
function addDraw(index) {
    players[index].data.draw++
    populatetable(players)
}
function addDefeat(index) {
    players[index].data.defeat++
    populatetable(players)
}

function addPlayer() {
    const name = document.querySelector('#addPlayer').value
    const newPlayer = {
        name: name,
        data: {
            victory: 0,
            draw: 0,
            defeat: 0,
            points: 0
        }
    }
    players.push(newPlayer)
    populatetable(players)
    document.querySelector('#addPlayer').value = ''
}

function removePlayer(index) {
    players.splice(index,1)
    populatetable(players)
}