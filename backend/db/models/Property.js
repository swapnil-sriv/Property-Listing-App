const db = require('../db');

class Property {
  static async findAll(limit, offset) {
    const query = 'SELECT * FROM properties LIMIT ? OFFSET ?';
    return db.query(query, [limit, offset]);
  }

  static async findById(id) {
    const query = 'SELECT * FROM properties WHERE id = ?';
    return db.query(query, [id]);
  }
}

module.exports = Property;
