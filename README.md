
# <p style="font-size: 40px; margin-left: 10px " >Goinnovior Task<p>

<div style="display: flex; gap: 12px; align-items: center;">
    <img src="https://i.ibb.co.com/ym2fVns4/icons8-next-js-144.png" width="60" alt="Nest Logo" />
    <img src="https://nestjs.com/img/logo-small.svg" width="70" alt="Nest Logo" />
</div>


# Frontend Application – Next.js, Redux & Sanity CMS

A modern frontend web application built with **Next.js** and **Redux**, powered by **Sanity CMS** for content management.  
The application is fully **Dockerized** and deployed using an automated **CI/CD pipeline with GitHub Actions**.

---

<p style="font-size: 30px;" >🚀 Tech Stack </p>
<div style="display: flex; gap: 12px; align-items: center;">
  <p>
    <img src="https://nestjs.com/img/logo-small.svg" width="20" alt="Nest Logo" />
  </p>
  <a href='https://github.com/uforco/goinnovior-server' target="_blank" >back end Documents - GO</a>
  <p>
</div>

# Frontend

- **Next.js** – React framework for production
- **Redux** – State management
- **TypeScript** – Type safety (if enabled)
- **Tailwind CSS / CSS Modules** – Styling (optional)

# CMS

- ## **Sanity CMS** – Headless content management
- ### **_Sanity CMS - Admin Dashboard : Url_** - `https://goinnovior-task.vercel.app/admin`

## 🧠 Sanity CMS Integration

- Headless CMS for managing dynamic content
- Content fetched using GROQ queries
- Real-time content updates (optional)

Example usage:

```ts
client.fetch(`*[_type == "post"]{ title, slug }`);
```

### DevOps

- **Docker** – Containerization
- **GitHub Actions** – CI/CD pipeline

---

## ✨ Features

- Server-side rendering (SSR) & static generation (SSG)
- Global state management with Redux
- Dynamic content powered by Sanity CMS
- Optimized performance & SEO
- Docker-based deployment
- Automated CI/CD workflow

---

## 🧩 Project Structure

```
   ./
    ├─ app/ # Next.js routing
    ├─ components/ # Reusable UI components
    ├─ redux/ # Redux store & slices
    ├─ lib/ # Utilities & helpers
    ├─ styles/ # Global styles
    └─ sanity/ # Sanity client & queries

```

---

## 🔄 State Management (Redux)

- Centralized global state
- Predictable state updates
- Scalable architecture for large applications

---

### ⚙️ Environment Variables

Create a .env.local file in the project root:

```ENV
NEXT_PUBLIC_SANITY_PROJECT_ID=''
NEXT_PUBLIC_SANITY_DATASET=''
NEXT_PUBLIC_SANITY_API_VERSION=''
NEXT_PUBLIC_SANITY_USE_CDN='true'

NEXT_PUBLIC_BACKEND_URL=''
```

### 🔒 Best Practices

- Environment variables for configuration
- Secure API communication
- Optimized image handling
- SEO-friendly pages
- Modular and scalable architecture
