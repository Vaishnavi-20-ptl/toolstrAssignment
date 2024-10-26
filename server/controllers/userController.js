const db = require('../config/default');

exports.getUsers = (req, res) => {
  db.query("select * from users", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  db.query("select * from users where user_id = ?", [id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
};
