<!-- @format -->

# Learning Redis

<p align="center">
  <img src="https://redis.io/images/redis-logo.svg" alt="Redis logo" width="180">
</p>

<p align="center">
  A hands-on Node.js playground for learning Redis alongside MongoDB and Express.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-runtime-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Redis-7-DC382D?logo=redis&logoColor=white" alt="Redis 7">
  <img src="https://img.shields.io/badge/MongoDB-7-47A248?logo=mongodb&logoColor=white" alt="MongoDB 7">
  <img src="https://img.shields.io/badge/Docker%20Compose-local%20services-2496ED?logo=docker&logoColor=white" alt="Docker Compose">
</p>

## About

This repository is a step-by-step learning space for Redis. The first example is a small Express API that connects to:

- Redis, using `ioredis`
- MongoDB, using `mongoose`
- Docker Compose for local database services

The current example lives in [`01`](01/).

## Project structure

```text
Redis/
|-- README.md
`-- 01/
    |-- docker-compose.yml
    |-- node.txt
    |-- package.json
    |-- package-lock.json
    `-- src/
        `-- index.js
```

Read [`01/node.txt`](01/node.txt) for detailed notes about the example, commands, endpoints, environment variables, and troubleshooting.

## Quick start

### 1. Enter the example

```bash
cd 01
```

### 2. Install Node.js dependencies

```bash
npm install
```

### 3. Start Redis and MongoDB

```bash
docker compose up -d
```

### 4. Start the API

```bash
npm run dev
```

The server runs at `http://localhost:4000`.

## Try the API

Check Redis:

```text
GET http://localhost:4000/redis
```

Expected response:

```json
{ "redis": "PONG" }
```

Check MongoDB:

```text
GET http://localhost:4000/mongo
```

Expected response:

```json
{ "mongo": "connected", "database": "chai_aur_redis" }
```

PowerShell users can test both endpoints with:

```powershell
Invoke-RestMethod http://localhost:4000/redis
Invoke-RestMethod http://localhost:4000/mongo
```

## Services

| Service     | Version   | Local port | Purpose                                       |
| ----------- | --------- | ---------: | --------------------------------------------- |
| Redis       | 7 Alpine  |       6379 | Fast in-memory data store and cache           |
| MongoDB     | 7         |      27017 | Document database used with the Redis example |
| Node.js API | Express 5 |       4000 | Application API                               |

Docker Compose stores data in the named volumes `redis-data` and `mongo-data`.

Stop the containers:

```bash
docker compose down
```

Remove containers and all stored learning data:

```bash
docker compose down -v
```

## Redis learning path

1. Connect to Redis from Node.js.
2. Send a Redis `PING` command.
3. Store and read values with `SET` and `GET`.
4. Add expiration times for cached data.
5. Cache MongoDB query results.
6. Learn lists, sets, hashes, and sorted sets.
7. Explore pub/sub and streams.
8. Add validation, error handling, tests, and graceful shutdown.
9. Configure authentication and network security before production use.

## Environment variables

The API supports these connection settings:

- `REDIS_URL`: Redis connection URL. Default: `redis://localhost:6379`.
- `mongo_url`: MongoDB connection URL used by the current source code. Default: `mongodb://localhost:27017/chai_aur_redis`.

Example:

```powershell
$env:REDIS_URL = "redis://localhost:6379"
$env:mongo_url = "mongodb://localhost:27017/chai_aur_redis"
npm run dev
```

## Requirements

- Node.js and npm
- Docker Desktop
- Docker Compose

## Useful commands

```bash
# Start services in the background
docker compose up -d

# View service status
docker compose ps

# View service logs
docker compose logs -f

# Start the Node.js API
npm run dev

# Stop services
docker compose down
```

## Safety note

This project is intended for local learning. The Redis and MongoDB ports are published to the local machine without production authentication settings. Do not expose this configuration directly to the public internet.

## Next examples

Future numbered folders can build on this foundation, for example:

- `02/`: Redis `SET`, `GET`, and key expiration
- `03/`: MongoDB query caching
- `04/`: Redis lists, hashes, and sets
- `05/`: Pub/sub and real-time events
- `06/`: Sessions, rate limiting, and production patterns
