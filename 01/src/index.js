/** @format */

const express = require("express");
const Redis = require("ioredis");
const mongoose = require("mongoose");

const app = express();

// create the new redis client;
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379"); // ye url docker se aaya

app.get("/redis", async (req, res) => {
  const reply = await redis.ping();
  res.json({ redis: reply });
});

app.get("/mongo", async (req, res) => {
  const mongo_url =
    process.env.mongo_url || "mongodb://localhost:27017/chai_aur_redis";

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(mongo_url);
  }
  res.json({ mongo: "connected", database: mongoose.connection.name });
});

app.listen(4000, console.log("server is running on server 4000"));
