const express = require('express');
const config = require('config');
const cors = require('cors');
const app = express();

const PORT = config.has("port") ? config.get("port") : 3000;


const usersRouteHandlerApp = require('./routes/userRoutes');
const loginRouteHandlerApp = require('./routes/loginRoutes');
const workoutRouteHandlerApp = require('./routes/workoutRoutes');


app.use(cors());            
app.use(express.json());     

app.use("/loginRoutes", loginRouteHandlerApp);
app.use("/workoutRoutes", workoutRouteHandlerApp);
app.use("/userRoutes", usersRouteHandlerApp);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

