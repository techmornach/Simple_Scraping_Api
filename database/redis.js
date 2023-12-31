//initialize redis
const redis = require("redis");
const client = redis.createClient({
  url: process.env.REDIS_URI,
});
client.on("error", function (error) {
  console.error(error);
});

await client.connect();
