# 🧑‍💻 Sahil Lutade — Portfolio

A personal developer portfolio built with React + Vite, showcasing my skills, projects, education, and experience — with a working contact form powered by a Node.js backend.

🌐 **Live Site:** [sahil-fullstack.netlify.app](https://sahil-fullstack.netlify.app)
📁 **Repository:** [Sahillutade/Portfolio](https://github.com/Sahillutade/Portfolio)

---

## 📌 Table of Contents

- [Sections](#sections)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [License](#license)

---

## 📄 Sections

| Section | Description |
|---|---|
| **About** | Brief introduction and personal summary |
| **Skills** | Technologies and tools I work with |
| **Projects** | Highlighted personal and academic projects |
| **Education** | Academic qualifications and certifications |
| **Resume** | Downloadable resume |
| **Contact** | Contact form that sends emails via Brevo |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js + Vite |
| Backend | Node.js + Express |
| Email Service | Brevo (Sendinblue) |
| Frontend Hosting | Netlify |
| Backend Hosting | Render |

---

## ✨ Features

- ⚡ Fast and optimized with Vite
- 📱 Fully responsive across all screen sizes
- 📬 Working contact form — messages delivered via Brevo
- 📄 Resume download support
- 🎨 Clean, minimal UI with smooth navigation

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm
- A Brevo account (for contact form emails)

---

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/Sahillutade/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

### Backend Setup

```bash
# Navigate to the backend folder
cd Backend

# Install dependencies
npm install

# Start the backend server
node index.js
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `Backend/` folder:

```env
BREVO_API_KEY=your_brevo_api_key
SENDER_EMAIL=your_verified_sender@email.com
RECEIVER_EMAIL=your_email@example.com
PORT=5000
```

Create a `.env` file in the root folder for the frontend:

```env
VITE_BACKEND_URL=http://localhost:5000
```

> ⚠️ Never commit `.env` files with real credentials. Add `.env` to your `.gitignore`.

---

## ☁️ Deployment

| Service | Platform |
|---|---|
| Frontend | [Netlify](https://netlify.com) |
| Backend | [Render](https://render.com) |

- The React frontend is deployed on **Netlify** with auto-deploy from the `main` branch.
- The Node.js + Express backend is deployed as a web service on **Render**.
- Make sure to set all environment variables in the Render dashboard for the backend.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> 💡 Built and maintained by [Sahil Lutade](https://sahil-fullstack.netlify.app) · Open to opportunities!
