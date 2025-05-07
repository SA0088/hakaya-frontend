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
- [Live Site](http://localhost:5173/home) 

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

## 🧊 IceBox – Future Frontend Features

These are planned features for future development on the frontend:

- 🔍 **Search bar** to filter experiences by title, category, or keywords.
- 🗂️ **Experience filters** by popularity, date, or number of likes.
- 📷 **Photo gallery inside experience cards** to support multiple images.
- 📱 **Improved responsive design** for smaller screens and mobile devices.
- 💬 **Commenting system for reviews** to allow interaction with user feedback.
- 🧾 **Browsing history** to show the user’s recently viewed experiences.
- 🌐 **Multi-language support (i18n)** especially for English and Arabic.
- 🔔 **Instant notifications (toasts)** for user actions like create, delete, like, etc.
- 📥 **Lazy loading** to load more experiences as the user scrolls.
- 🧪 **Demo mode page** to allow guests to try the app without signing up.

---

