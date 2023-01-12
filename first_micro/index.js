// install express with `npm install express`
const express = require("express");
const cors = require("cors");

const app = express();
app.set(port, process.env.PORT || 8000);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.json("Welcome to your first ever app on Deta!"));

app.listen(
  app.get("port", () => {
    console.log(`Port available at localhost:${app.get("port")}`);
    console.log("Official port available at https://sabindi-app.deta.dev/");
    console.log("Press Ctrl + C to close localhost.");
  })
);

// export 'app'
module.exports = app;
