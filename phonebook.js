/* TODO: 
    create phonebook array
    add methods for adding in the phonebook and getting it
    export the methods
*/
let Contact = require('./models/Contact')
let contacts = [];

function getAll() {
    return contacts.slice();
};

function addContact(name, number) {
    let contact = new Contact(name, number)
    contacts.push(contact);
};

module.exports = {
    getAll,
    addContact
};