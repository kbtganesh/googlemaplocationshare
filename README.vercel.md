# Google Map Location Share – Local Dev Guide

Uses **Vite** for frontend and **Vercel Serverless Functions** for backend (`api/geocode.js`).

---

## ✅ Setup Instructions

### 1. Remove `"dev"` script in `package.json`

This lets `vercel dev` auto-run:
- Frontend via Vite (e.g., http://localhost:5173)
- Backend APIs (e.g., http://localhost:3000)

---

### 2. Proxy API in `vite.config.js`

```js
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
    },
  },
}
```

---

### 3. Start Dev Server

```bash
vercel dev
```

- Vercel shows both ports in terminal
- Frontend uses `/api/...` and gets proxied to backend

---

### 4. API Call Example

```js
fetch('/api/geocode', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ plusCode: 'X69V+68 Chennai' }),
});
```

---

### ✅ That's it

Run only:

```bash
vercel dev
```

And everything works: frontend + backend with hot reload.
