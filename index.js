const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
app.use(require("./routes/categories.route"));
app.use(require("./routes/news.route"));
app.use(require("./routes/comments.route"))
mongoose
  .connect("mongodb+srv://Khalid:1234abcd@khalid.9spd7ka.mongodb.net/News")
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(3000, () => console.log("server start"));
