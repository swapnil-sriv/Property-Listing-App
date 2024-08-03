const db = require('../db');

exports.getAllProperties = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;
  const properties = await db.query('SELECT * FROM properties LIMIT ?, ?', [offset, parseInt(limit)]);
  res.json(properties);
};

exports.getPropertyById = async (req, res) => {
  const { id } = req.params;
  const property = await db.query('SELECT * FROM properties WHERE id = ?', [id]);
  res.json(property[0]);
};
