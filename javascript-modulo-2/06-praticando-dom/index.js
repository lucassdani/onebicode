function addContact() {
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'contato'

    const ul = document.createElement('ul')

    const nameli = document.createElement('li')
    nameli.innerText = 'Nome: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameli.appendChild(nameInput)
    ul.appendChild(nameli)
    ul.appendChild(document.createElement('br'))

    const phoneli = document.createElement('li')
    phoneli.innerText = 'Telefone: '
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneli.appendChild(phoneInput)
    ul.appendChild(phoneli)
    ul.appendChild(document.createElement('br'))

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label'
    const addreseInput = document.createElement('input')
    addreseInput.type = 'text'
    addreseInput.name = 'address'
    addreseInput.id = 'address'
    addressLi.appendChild(addreseInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    contactSection.append(h3, ul)
}

function removeContact() {
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contact = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contact[contact.length - 1])
}