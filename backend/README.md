# SKIT VLab — Backend Setup

## 1. Install dependencies
```bash
cd backend
npm install
```

## 2. Configure environment
```bash
cp .env.example .env
```
Then edit `.env`:
- `MONGO_URI` — from MongoDB Atlas: **Database → Connect → Drivers**, copy the string, replace `<password>` with your real DB user password, and set the database name to `skitvlab`.
- `JWT_SECRET` — generate one:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
  Paste the output as `JWT_SECRET`.

## 3. Run the dev server
```bash
npm run dev
```
You should see:
```
MongoDB connected: <your-cluster-host>
SKIT VLab backend running on http://localhost:5000
```

## 4. Test it
Open in browser or use curl:
```bash
curl http://localhost:5000/health
```
Expected response:
```json
{"status":"ok","service":"skit-vlab-backend"}
```

## Common errors
| Error | Fix |
|---|---|
| `MONGO_URI is not set` | You forgot to create `.env` from `.env.example`, or didn't fill it in |
| `MongoServerError: bad auth` | Wrong password in `MONGO_URI`, or special characters in password not URL-encoded |
| `EADDRINUSE` | Port 5000 already used by another process — change `PORT` in `.env` |
| Atlas connection times out | In Atlas, go to **Network Access** → add your current IP (or `0.0.0.0/0` for development only) |

## Deliverable for this step
- [ ] `npm run dev` starts without errors
- [ ] Terminal shows both "MongoDB connected" and "backend running" messages
- [ ] `curl http://localhost:5000/health` returns the JSON above
