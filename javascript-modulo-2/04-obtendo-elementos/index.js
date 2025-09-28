function show() {
    const contactiList = document.getElementById('contatc-list')
    console.log(contactiList)

    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    const contact = document.querySelectorAll('#contact-list > li > label')
    console.log(contact)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    const fistContact = document.querySelector('#contact-list > l1 > label')
    console.log(fistContact)
}