/** @format */

const express = require("express");
const Redis = require("ioredis");

const app = express();
app.use(express.json());

const redis = new Redis(process.env.Redis_url || "redis://localhost:6379");

const BANNER_KEY = "app:banner";

app.post("/banner", async (req, res) => {
  await redis.set(BANNER_KEY, req.body?.message || "Welcome to chai aur Redis");
  res.json({ succ: true });
});

app.get("/banner", async (req, res) => {
  const message = await redis.get(BANNER_KEY);
  res.json({ message: message });
});

app.delete("/banner", async (req, res) => {
  await redis.del(BANNER_KEY);
  res.json({ succ: true });
});

app.get('/banner/health', async (req, res) => {
    const health = await redis.exists(BANNER_KEY);
    res.json({ health: Boolean(health) });
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});