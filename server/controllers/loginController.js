const db = require('../config/db'); 

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  db.query("select * from users where email = ? and password = ?", [email, password], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = results[0];
    res.json({ message: "Login successful", userId: user.user_id });
  });
};
