function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('playerNumber').value

    const confirmation = confirm(`Escalar ${name} como ${position}?`)
    
    if (confirmation) {
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = `player-${number}`
        playerItem.innerText = `${position}: ${name}(${number})` 
        teamList.appendChild(playerItem)

         document.getElementById('position').value = ''
         document.getElementById('name').value = ''
         document.getElementById('number').value = ''
    }
}

function removerPlayer() {
    const number = document.getElementById('numberToRemove').value
    const playerRemove = document.getElementById(`player-${number}`)

    const confirmation = confirm(`remover o número ${number}`)

    if (confirmation) {
        playerRemove.remove()
        document.getElementById('number').value = ''
    }
}