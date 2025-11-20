function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm('deseja confirmar jogador?')
    
    if (confirmation === true) {
        const ul = document.getElementById('teamList')
        const info = document.createElement('li')
        info.id = `player - ${number}`
        info.innerText = `${position}: ${name} (${number})`
        ul.appendChild(info)
        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}

const button = document.getElementById('tofield')

button.addEventListener("click", addPlayer);

function removeplayer() {
    const Number = document.getElementById('removeNumber')
    const playeremove = document.getElementById(`player - ${number}`)

    const confirmation = confirm('remover jogador?')

    if (confirmation) {
        document.getElementById('ul').removeChild(ul)
        document.getElementById('removeNumber').value = ''
    }
    
}

const removeButton = document.getElementById('remove')

removeButton.addEventListener('click', removeplayer)