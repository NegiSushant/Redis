const client = require("./client.js");

async function init() {
  // Adding members to the set
  await client.sadd("myset", "member1");
  await client.sadd("myset", "member2");
  await client.sadd("myset", "member3");
  await client.sadd("myset", "member4");
}
init();
