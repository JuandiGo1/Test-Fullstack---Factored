# Test-Fullstack---Factored
Factored Internship - Technical Assessment (Full-Stack) 

# 🧑‍💼 Employee Profile App – Factored Challenge

This is a simple fullstack web application to display employee profiles, built with:

- **Frontend:** React + Vite + Tailwind
- **Backend:** Express + Node.js
- **Database:** MongoDB
- **Deployment:** Vercel https://factored-client.vercel.app/

---

## 💡 What does it do?

This app allows you to:

- Log in (no real authentication, just a form)
- See an employee’s profile, including:
  - Name and position
  - Avatar
  - Skills shown in a spider (radar) chart
- See a custom 404 page if you go to a wrong link

---

## 🛠️ How to run it

> ⚠️ You only need **Docker Desktop** installed. No coding or setup needed!

### 1. ✅ Install Docker

- Go to: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
- Download **Docker Desktop**
- Install it (follow the instructions)
- Open Docker Desktop and make sure it's running

---

### 2. 📦 Clone the project
``` https://github.com/JuandiGo1/Test-Fullstack---Factored.git ```

If you don’t know how to use Git, just:

- Go to the GitHub repository
- Click the green (or blue in dark mode)  **Code** button
- Choose **Download ZIP**
- Extract the folder to your computer

---

### 3. ▶️ Run the app

Open a terminal or command prompt in the project folder (where `docker-compose.yml` is), and type:

```bash
docker compose up --build
```

This will:

- Build and start the **backend**, **frontend**, and **database**
- Make the site available at [http://localhost:5173](http://localhost:5173)

---

### 4. 🌐 Open your browser

Go to:

> [http://localhost:5173](http://localhost:5173)

That’s it! You’re seeing the app working 🎉

---



## 🧼 To stop the app

In the terminal, press `Ctrl + C`, then type:

```bash
docker compose down
```

This will stop and clean the containers.

---

## 🧠 Notes

- No real login/authentication is used, as specified.
- Avatar is generated randomly from an online API.
- Skills chart uses a radar chart (Spider chart) built with [recharts](https://recharts.org/).
