const express = require("express");
const axios = require("axios");
const client = require("./client.js");
const app = express();

app.get("/", async (req, res) => {
  const cachevalue = await client.get("todos");
  if (cachevalue) {
    console.log("Cache hit");
    return res.json(JSON.parse(cachevalue));
  }
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  await client.set("todos", JSON.stringify(data));
  await client.expire("todos", 30);
  return res.json(data);
});

app.listen(9000, () => {
  console.log("Server is running on port 3000");
});
