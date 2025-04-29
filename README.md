🌟 Project Name: Hakaya (Experiences Platform)
📖 Description
Hakaya is a platform where users can explore and share different experiences across multiple categories.
Users can like experiences they enjoy and view them later on their Favorites page.

🎯 Features
Browse experiences by category.

Upload personal experiences with images.

Like experiences directly.

Save liked experiences to the Favorites page.

Leave reviews and rate experiences.

User authentication (Sign up / Login).


🛠️ Technologies Used
Frontend: React.js (or your preferred framework)

Backend: Node.js with Express.js / Laravel / Django (choose your stack)

Database: MySQL / PostgreSQL

Storage: Local server or Cloud (for image uploads)


🗂️ Database Structure (Summary)
Main Tables:
Users

Categories

Experiences

Reviews

Important Fields:
Users: id, name, email, password, favorite_experiences (array)

Categories: id, name, description

Experiences: id, title, summary, image_path, category_id, creator_id,  likes_count, created_at

Reviews: id, user_id, experience_id, comment, likes_count


🖼️ Image Upload Strategy
Images are uploaded through a form directly from the user’s device.

Stored either locally (/uploads/experiences/) or on a cloud service like AWS S3.

The image_path in the database stores the saved image location. 


📚 How Favorites Work
When a user likes an experience, its ID is saved into their favorite_experiences field.

On the Favorites Page, all experiences related to these IDs are displayed.

🔥 API Endpoints 
🧑‍💼 User Endpoints

Method	URL	Description
POST	/register	Register a new user
POST	/login	Login and authenticate
GET	/users/me	Fetch the current user profile
PUT	/users/me/favorites	Update user's favorite experiences
📚 Category Endpoints

Method	URL	Description
GET	/categories	Get all categories
POST	/categories	Create a new category (Admin only)
✨ Experience Endpoints

Method	URL	Description
GET	/experiences	List all experiences
GET	/experiences/:id	View a specific experience
POST	/experiences	Submit a new experience
PUT	/experiences/:id/like	Like an experience
DELETE	/experiences/:id	Delete an experience (Admin or Owner)
📝 Review Endpoints

Method	URL	Description
POST	/reviews	Add a review to an experience
PUT	/reviews/:id/like	Like a review



🌍 Future Enhancements
Full admin dashboard.

Push notifications for likes and reviews.

Advanced filtering (by category, popularity, etc).

Responsive mobile-friendly PWA app.