const db = require('../config/db');

exports.getWorkouts = (req, res) => {
  db.query("select * from workout_details", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.createWorkout = (req, res) => {
  const { user_id, workout_type_id, workout_date, duration, notes } = req.body;
  db.query(
    "insert into workout_details (user_id, workout_type_id, workout_date, duration) values (?, ?, ?, ?)",
    [user_id, workout_type_id, workout_date, duration],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Workout added successfully", workoutId: results.insertId });
    }
  );
};

exports.updateWorkout = (req, res) => {
  const { id } = req.params;
  const { workout_type_id, workout_date, duration} = req.body;
  db.query(
    "update workout_details set workout_type_id = ?, workout_date = ?, duration = ? where workout_id = ?",
    [workout_type_id, workout_date, duration, id],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Workout updated successfully" });
    }
  );
};

exports.deleteWorkout = (req, res) => {
  const { id } = req.params;
  db.query("delete from workout_details where workout_id = ?", [id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Workout deleted successfully" });
  });
};
