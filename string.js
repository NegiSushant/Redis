const client = require("./client.js");
async function init() {
  //geting the value
  const result = await client.get("msg:1");
  console.log("Result -> ", result);

  // settings the value
  await client.set("msg:4", "hey! how are you?");
  const result1 = await client.get("msg:4");
  console.log("Result -> ", result1);

  // Expiring the value
//   await client.expire("msg:2", 10);
  const result2 = await client.get("msg:2");
  console.log("Result -> ", result2);
}

init();
