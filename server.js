
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Its working the my demo app\n just updated from the vps and deployed withthe v2 version");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toLocaleString("en-IN", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "Asia/Kolkata"
    })
  });
});

app.listen(port, () => {
  console.log(`Application Running on the port ${port}`);
});
