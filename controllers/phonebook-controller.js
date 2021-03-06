const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    // TODO: load index page
    let contacts = phonebook.getAll();
    res.render('index', { contacts });
  },
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array
    let name = req.body.name;
    let number = req.body.number;
    phonebook.addContact(name, number);
    res.redirect('/');
  }
}