function show() {
    const contactList= document.getElementById('contact-list')
    console.log(contactList)

    const listElements = document.getElementsByName('li')
    console.log(listElements)

    const contacIpunts = document.getElementsByClassName('contact-input')
    console.log(contacIpunts)

    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    const fistContact = document.querySelector('#contact-list > li > label')
    console.log(fistContact)
}