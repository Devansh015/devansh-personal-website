# Devansh Jain – Personal Website

Welcome to my personal website!  
This sites main purpose is to showcase my projects, share my experiences, and provide ways to connect with me!!
<img width="1474" height="884" alt="Screenshot 2026-04-17 at 11 49 24 PM" src="https://github.com/user-attachments/assets/a7b5747d-0607-4959-a1a4-896eeaf28575" />

🔗 [Live Site](https://devanshjain.vercel.app/)

---
## Features
- **About Me**: Learn about my background and interests.
- **Projects**: Explore a curated list of my work and contributions.
- **Blog**: Read articles and insights on various topics.
- **Contact**: Find ways to get in touch or connect professionally.
---

## Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: [Vercel](https://vercel.com/)

---
## Profile View Counter Setup (Upstash Redis)
1. Go to [console.upstash.com](https://console.upstash.com/) and create a free Redis database.
2. In the Upstash dashboard, copy your **REST URL** and **REST Token**.
3. Add both values to your local `.env.local`:

```bash
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
```

4. In Vercel, add the same two variables in **Project Settings -> Environment Variables**.

With these variables set, each homepage visit sends `POST /api/views`, increments the Redis counter, and renders the total above the intro text after the fetch resolves.


