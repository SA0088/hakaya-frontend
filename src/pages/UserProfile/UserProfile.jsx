// import { useEffect, useState } from "react";
// import * as expAPI from "../../utilities/exp-api";

// export default function UserProfile() {
//   const [createdExperiences, setCreatedExperiences] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchExperiences() {
//       try {
//         const data = await expAPI.getUserExperiences();
//         console.log("Received data:", data);

//         if (Array.isArray(data)) {
//           setCreatedExperiences(data);
//         } else if (Array.isArray(data.results)) {
//           setCreatedExperiences(data.results);
//         } else {
//           console.error("Unexpected data format:", data);
//           setCreatedExperiences([]); // fallback
//         }

//       } catch (error) {
//         console.error("Error fetching user experiences:", error);
//         setCreatedExperiences([]);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchExperiences();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>User Profile</h1>
//       {createdExperiences.length === 0 ? (
//         <p>No experiences created yet.</p>
//       ) : (
//         <ul>
//           {createdExperiences.map((exp) => (
//             <li key={exp.id}>{exp.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import * as userAPI from "../../utilities/user-api";
// import * as experienceAPI from "../../utilities/exp-api";
// import "./UserProfile.css";

// export default function UserProfile() {
//   const { userId } = useParams();
//   const [userInfo, setUserInfo] = useState(null);
//   const [createdExperiences, setCreatedExperiences] = useState([]);
//   const [likedExperiences, setLikedExperiences] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const user = await userAPI.getUserById(userId);
//       const created = await experienceAPI.getUserExperiences(userId);
//       const liked = await experienceAPI.getLikedExperiences(userId);
//       setUserInfo(user);
//       setCreatedExperiences(created);
//       setLikedExperiences(liked);
//     }

//     fetchData();
//   }, [userId]);

//   if (!userInfo) return <div>Loading...</div>;

//   return (
//     <div className="profile-container">
//       <h1>{userInfo.firstName} {userInfo.lastName}</h1>
//       <p><strong>Username:</strong> {userInfo.username}</p>
//       <p><strong>Email:</strong> {userInfo.email}</p>

//       <section className="experiences-section">
//         <h2>Created Experiences</h2>
//         <ul>
//           {createdExperiences.map(exp => (
//             <li key={exp.id}>{exp.title}</li>
//           ))}
//         </ul>
//       </section>

//       <section className="experiences-section">
//         <h2>Liked Experiences</h2>
//         <ul>
//           {likedExperiences.map(exp => (
//             <li key={exp.id}>{exp.title}</li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { getUserProfile } from "../../utilities/user-api"; // تأكد من أن هذا موجود في utilities
import "./UserProfile.css";

export default function UserProfilePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserProfile(); // يجب أن يعيد { user, createdExperiences, likedExperiences }
        setUserData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }
    fetchData();
  }, []);

  if (!userData) return <div className="loading">Loading...</div>;

  const { user, createdExperiences, likedExperiences } = userData;

  return (
    <div className="profile-container">
      <h1 className="profile-heading">Welcome, {user.first_name}!</h1>
      <div className="user-info">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <section className="experience-section">
        <h2>Your Experiences</h2>
        {createdExperiences.length ? (
          <ul>
            {createdExperiences.map((exp) => (
              <li key={exp.id}>{exp.title}</li>
            ))}
          </ul>
        ) : (
          <p>You haven't created any experiences yet.</p>
        )}
      </section>

      <section className="experience-section">
        <h2>Liked Experiences</h2>
        {likedExperiences.length ? (
          <ul>
            {likedExperiences.map((exp) => (
              <li key={exp.id}>{exp.title}</li>
            ))}
          </ul>
        ) : (
          <p>You haven't liked any experiences yet.</p>
        )}
      </section>
    </div>
  );
}
