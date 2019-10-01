const Model = require('./../models/news');

const controller = {
  getAll: async (req, res) => {
    try {
      const results = await Model.getAll();

      if (!results) {
        return res.status(401).json({ error: 'No data' });
      }

      res.status(200).json({ data: results });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
};

module.exports = controller;
