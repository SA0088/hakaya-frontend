# Hakaya Frontend 🌟

## 📝 Project Description
Hakaya is a storytelling and experience-sharing platform that allows users to explore, post, and interact with stories across various categories such as Adventure, Cooking, Volunteering, Culture, and more. The frontend provides an intuitive user interface for browsing, liking, and reviewing experiences. 💬📸

## 📂 Repository Description
This is the frontend of the Hakaya platform, built using modern web technologies. It communicates with the backend API to display experiences, handle user interactions, and manage authentication. It aims to deliver a responsive, clean, and accessible user experience. 🌐

## 🛠️ Tech Stack
- **Framework:** React ⚛️
- **Routing:** React Router 🧭
- **State Management:** Context API / useState 🔁
- **HTTP Requests:** Axios 🌐
- **Styling:** Tailwind CSS 🎨
- **Authentication:** JWT-based auth handled via API tokens 🔒
- **Deployment:** Vite + optional Docker 🐳

## 🔗 Backend Repository Link
- [Hakaya Backend Repository](https://github.com/SA0088/hakaya-backend)

## 🌍 Link to Deployed Site
- [Live Site](http://localhost:5173/experince) 

---

## 🐳 Installation Instructions (Docker)

To run the Hakaya frontend using Docker:

1. **Clone the Repository**
```bash
git clone https://github.com/SA0088/hakaya-frontend.git
cd hakaya-frontend
```

2. **Build the Docker Image**
```bash
docker build -t hakaya-frontend .
```

3. **Run the Container**
```bash
docker run -p 5173:5173 hakaya-frontend
```

> The frontend should now be accessible at `http://localhost:5173`

---

## 🧊 IceBox Features

The following features are planned for future releases but are not yet implemented:

- **🔐 User Dashboard**: A personal dashboard for managing posted experiences and reviews.
- **📊 Filtering & Sorting**: Filter experiences by category, likes, or date.
- **🌓 Dark Mode**: Toggle between light and dark UI themes.
- **🌍 Multilingual Support**: Language toggle (e.g., Arabic/English).
- **🔔 Notifications**: Real-time notifications for likes and reviews.
- **🖼️ Live Image Preview**: Show a preview before uploading an experience image.

---

> 🚧 *Work in Progress*: These features are planned to enhance user engagement and usability.