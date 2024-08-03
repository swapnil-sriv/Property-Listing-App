const db = require('../db');

exports.submitInquiry = async (req, res) => {
  const { name, email, phone, message, propertyId } = req.body;
  await db.query('INSERT INTO inquiries (name, email, phone, message, property_id) VALUES (?, ?, ?, ?, ?)',
    [name, email, phone, message, propertyId]);
  res.status(201).send({ message: 'Inquiry submitted' });
};
