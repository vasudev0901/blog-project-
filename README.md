# ✦ BlogSpace

A simple blog website built with **Node.js**, **Express**, and **EJS**. It has a login page with cookie-based authentication and a protected home page that shows featured blog posts.

## Features

- Login page with error handling for wrong credentials
- Cookie-based session (`user` cookie)
- Protected home page (redirects to `/login` if not logged in)
- Personalized welcome message
- Featured blog cards section
- Logout that clears the cookie
- Responsive design (mobile friendly)

## Tech Stack

| Technology    | Purpose                     |
| ------------- | --------------------------- |
| Node.js       | Runtime                     |
| Express 5     | Web server and routing      |
| EJS           | Server-side HTML templates  |
| cookie-parser | Reading and writing cookies |
| nodemon       | Auto-restart in development |
| HTML / CSS    | Frontend and styling        |

## Project Structure

```
blogspace/
├── app.js              # Express server and routes
├── package.json
├── package-lock.json
├── views/
│   ├── index.ejs       # Home page (protected)
│   └── login.ejs       # Login page
└── public/
    └── style.css       # Styles for all pages
```

> **Note:** Express looks for EJS templates in a `views/` folder and static files in `public/`. Make sure `index.ejs` and `login.ejs` are inside `views/`, and `style.css` is inside `public/`.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone or download the project
cd blogspace

# 2. Install dependencies
npm install
```

### Run the App

```bash
# Normal start
node app.js

# Or with auto-reload during development
npx nodemon app.js
```

Open your browser at **http://localhost:3000**

## Demo Login

| Field    | Value             |
| -------- | ----------------- |
| Email    | `admin@gmail.com` |
| Password | `12345`           |

## Routes

| Method | Route     | Description                                         |
| ------ | --------- | --------------------------------------------------- |
| GET    | `/login`  | Shows the login page                                |
| POST   | `/login`  | Checks credentials, sets cookie, redirects to `/`   |
| GET    | `/`       | Home page (redirects to `/login` if not logged in)  |
| GET    | `/logout` | Clears the cookie and redirects to `/login`         |

## How Authentication Works

1. The user submits the login form (`POST /login`).
2. If the email and password match, the server sets a cookie: `user=<email>`.
3. On `GET /`, the server reads the cookie. If it is missing, the user is sent back to `/login`.
4. On `GET /logout`, the cookie is cleared.

## Security Notes

This project is for learning and demo purposes. Before using it in production, you should:

- Store users in a database instead of hardcoding credentials in `app.js`
- Hash passwords (e.g., with `bcrypt`)
- Use signed/`httpOnly` cookies or a proper session library (e.g., `express-session`) instead of a plain `user` cookie, which can be edited by anyone
- Move `nodemon` to `devDependencies`
- Use environment variables for configuration (port, secrets)

## Future Improvements

- User registration
- Create, edit, and delete blog posts
- Database integration (MongoDB / MySQL)
- Working "Blogs" and "About" pages
- Password hashing and session management
