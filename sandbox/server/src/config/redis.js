import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");
const subscriber = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

redis.once("ready", () => {
    console.log("Connected to Redis");
})

subscriber.once("ready", () => {
    console.log("Subscriber connected to Redis");
})

await subscriber.config("SET", "notify-keyspace-events", "Ex");
subscriber.subscribe("__keyevent@0__:expired")

export default { redis, subscriber };