const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
//config:-
dotenv.config({ path: "backend/config/config.env" });

// connecting to database:-

connectDatabase();

// start server:-
app.listen(process.env.PORT, () => {
  console.log(`app is running on http://localhost:${process.env.PORT}`);
});
