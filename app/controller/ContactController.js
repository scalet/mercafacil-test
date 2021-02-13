
const database = require('../models');

module.exports = {
  async indexMacapa (req, res) {

    const contacts = await database.contact.findAll();

    return res.json(contacts);
  },

  async saveMacapa (req, res) {
    const {contacts} = req.body;
    let invalid =[];
    let valid = [];

    const total_contacts = contacts.length;

     contacts.forEach(contact => {
      
      if ((!contact.name || contact.name == "") || (!contact.cellphone || contact.cellphone == "" || contact.cellphone.length != 13)) {
        invalid.push(contact)
        return
      }

      valid.push({nome:contact.name, celular:contact.cellphone});

    }); 

    await database.contact.bulkCreate(valid);

    return res.status(200).json({
      success:valid.length,
      totalSent:invalid.length,
      invalid:invalid});
  }
}