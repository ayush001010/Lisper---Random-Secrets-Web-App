# 🕵️‍♂️ Lisper - Random Secrets Web App

Lisper is a simple Node.js web application that fetches **random secrets** from an API and dynamically displays them using **Express.js**, **Axios**, and **EJS**. This project is a great way to understand how to make API requests and use server-side rendering in a Node.js environment.

---

## 🚀 **Features**
- 🌐 Fetches random secrets from the **Secrets API**.
- 📜 Renders the secret dynamically using **EJS templating**.
- 🎨 Uses a **styled frontend** with custom fonts and CSS.
- 🚀 Built with **Express.js** and **Axios** for efficient API handling.

---

## 🛠️ **Technologies Used**
- **Node.js** – JavaScript runtime environment.
- **Express.js** – Web framework for handling routes and API requests.
- **Axios** – To fetch data from the external API.
- **EJS** – For rendering dynamic HTML content.
- **CSS** – For styling the frontend.

---

## 🔧 Installation & Setup
- 1️⃣ Clone the Repository
  ```sh
  https://github.com/ayush001010/Lisper---Random-Secrets-Web-App.git
  cd Lisper---Random-Secrets-Web-App
  ```
- 2️⃣ Install Dependencies
  ```sh
  npm install
  ```
- 3️⃣ Start the Server
  ```
  node index.js
  ```
- 3️⃣ Open in Browser
  Go to: http://localhost:3000

---

## 🔥 How It Works
- When a user visits the home page (/), the server:
  - Sends a GET request to the Secrets API using Axios.
  - Retrieves a random secret and its username.
  - Passes the data to the index.ejs template.
  - Dynamically displays the secret and username on the webpage.
- The frontend is styled using Google Fonts and custom CSS for a visually appealing design. 🚀

---

## 📡 API Used
- Lisper fetches secrets from the Secrets API:
  https://secrets-api.appbrewery.com/random

---

## 📌 Key Learnings
- 📡 How to fetch data from an external API using Axios.
- 🖥️ Rendering dynamic content in EJS templates.
- 🏗️ Structuring an Express.js application with static files and views.
- 🎨 Styling the UI with CSS and Google Fonts.
- 🛠️ Handling errors in API requests gracefully.

---

## 📜 License
This project is open-source under the MIT License.

## ✨ Enjoy Building!

