// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router";
// // import * as expAPI from "../../utilities/exp-api"; // تأكد من أن هذه الدالة متوفرة لديك

// // export default function UserProfile({ user }) {
// //   const [myExperiences, setMyExperiences] = useState([]);
// //   const [likedExperiences, setLikedExperiences] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (!user || !user.id) return; // التأكد من وجود user قبل جلب البيانات

// //     async function fetchData() {
// //       try {
// //         const created = await expAPI.getUserExperiences(user.id);  // جلب التجارب التي أنشأها المستخدم
// //         console.log('Created experiences:', created);

// //         const liked = await expAPI.getLikedExperiences();  // جلب التجارب التي أعجب بها المستخدم
// //         console.log("Liked experiences:", liked);

// //         setMyExperiences(created);
// //         setLikedExperiences(liked);
// //       } catch (err) {
// //         console.error("Error loading profile:", err);
// //       }
// //     }

// //     fetchData();
// //   }, [user]); // إعادة تنفيذ التأثير عند تغيير user
// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const profileData = await expAPI.getUserProfile();
// //         console.log(profileData)
// //         setMyExperiences(profileData.created_experiences);
// //         setLikedExperiences(profileData.liked_experiences);
// //       } catch (err) {
// //         console.error("Error loading profile:", err);
// //       }
// //     }
  
// //     fetchData();
// //   }, []);
// //   async function handleDelete(expId) {
// //     if (!window.confirm("Are you sure you want to delete this experience?")) return;
// //     try {
// //       await expAPI.deleteExp(expId);
// //       setMyExperiences(myExperiences.filter(exp => exp.id !== expId));
// //     } catch (err) {
// //       console.error("Error deleting experience:", err);
// //     }
// //   }
// //   console
// //   if (!user || !user.id) return <p>Loading profile...</p>;

// //   return (
// //     <div className="profile-page">
// //       <header>
// //         <h1 className="profile-heading">Welcome, {user.username}!</h1>
// //       </header>

// //       <div className="user-info">
// //         <p><strong>Username:</strong> {user.username}</p>
// //         <p><strong>Email:</strong> {user.email}</p>
// //       </div>

// //       <section>
// //         <h2>My Experiences</h2>
// //         {myExperiences?.length ? (
// //           myExperiences.map(exp => (
// //             <div key={exp.id} className="exp-card">
// //               <h3>{exp.title}</h3>
// //               <p>{exp.summary}</p>
// //               <button onClick={() => navigate(`/edit-exp/${exp.id}`)}>Edit</button>
// //               <button onClick={() => handleDelete(exp.id)}>Delete</button>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No experiences yet.</p>
// //         )}
// //       </section>

// //       <section>
// //         <h2>Liked Experiences</h2>
// //         {likedExperiences.length ? (
// //           likedExperiences.map(exp => (
// //             <div key={exp.id} className="exp-card liked">
// //               <h3>{exp.title}</h3>
// //               <p>{exp.summary}</p>
// //             </div>
// //           ))
// //         ) : (
// //           <p>You haven't liked any experiences yet.</p>
// //         )}
// //       </section>
// //     </div>
// //   );
// // }
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import * as expAPI from "../../utilities/exp-api";
// import ExpIndexCard from "../../components/ExpIndexCard/ExpIndexCard"; // تأكد من المسار الصحيح

// export default function UserProfile({ user }) {
//   const [myExperiences, setMyExperiences] = useState([]);
//   const [likedExperiences, setLikedExperiences] = useState([]);
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   async function fetchData() {
//   //     try {
//   //       const profileData = await expAPI.getUserProfile();
//   //       setMyExperiences(profileData.created_experiences);
//   //       setLikedExperiences(profileData.liked_experiences);
//   //     } catch (err) {
//   //       console.error("Error loading profile:", err);
//   //     }
//   //   }

//   //   fetchData();
//   // }, []);
//   useEffect(() => {
//     if (!user || !user.id) return;
//     async function fetchData() {
//       try {
//         const profileData = await expAPI.getUserProfile();
//         setMyExperiences(profileData.created_experiences);
//         setLikedExperiences(profileData.liked_experiences);
//       } catch (err) {
//         console.error("Error loading profile:", err);
//       }
//     }
//     fetchData();
//   }, [user]);

//   async function handleDelete(expId) {
//     if (!window.confirm("Are you sure you want to delete this experience?")) return;
//     try {
//       await expAPI.deleteExp(expId);
//       setMyExperiences(prev => prev.filter(exp => exp.id !== expId));
//     } catch (err) {
//       console.error("Error deleting experience:", err);
//     }
//   }

//   if (!user || !user.id) return <p>Loading profile...</p>;

//   return (
//     <div className="profile-page max-w-5xl mx-auto p-6">
//       <header className="mb-8">
//         <h1 className="text-3xl font-bold">Welcome, {user.username}!</h1>
//       </header>

//       <div className="user-info mb-8">
//         <p><strong>Username:</strong> {user.username}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//       </div>

//       <h2 className="text-2xl font-semibold mb-4">My Experiences</h2>
//       <section className="index-card-container">
//         {myExperiences.length ? (
//           myExperiences.map(exp => (
//             <div key={exp.id} className="mb-6">
//               <ExpIndexCard experience={exp} />
//               <div className="flex gap-3 mt-2">
//                 <button
//                   onClick={() => navigate(`/edit-exp/${exp.id}`)}
//                   className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(exp.id)}
//                   className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No experiences yet.</p>
//         )}
//       </section>
//       <h2 className="text-2xl font-semibold mb-4">Liked Experiences</h2>
//       <section className="index-card-container">
//         {likedExperiences.length ? (
//           likedExperiences.map(exp => (
//             <div key={exp.id} className="mb-6">
//               <ExpIndexCard experience={exp} />
//             </div>
//           ))
//         ) : (
//           <p>You haven't liked any experiences yet.</p>
//         )}
//       </section>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as expAPI from "../../utilities/exp-api";
import ExpIndexCard from "../../components/ExpIndexCard/ExpIndexCard"; // Ensure correct path

export default function UserProfile({ user }) {
  const [myExperiences, setMyExperiences] = useState([]);
  const [likedExperiences, setLikedExperiences] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.id) return; // Ensure user is valid before fetching data

    async function fetchData() {
      try {
        // Assuming `getUserProfile` provides the correct data
        const profileData = await expAPI.getUserProfile(); 
        setMyExperiences(profileData.created_experiences || []);
        setLikedExperiences(profileData.liked_experiences || []);
      } catch (err) {
        console.error("Error loading profile:", err);
      }
    }

    fetchData();
  }, [user]); // Trigger the effect whenever `user` changes

  async function handleDelete(expId) {
    if (!window.confirm("Are you sure you want to delete this experience?")) return;

    try {
      await expAPI.deleteExp(expId); // Deleting experience
      setMyExperiences(prev => prev.filter(exp => exp.id !== expId)); // Update state
    } catch (err) {
      console.error("Error deleting experience:", err);
    }
  }

  // Return loading state if no user is available
  if (!user || !user.id) return <p>Loading profile...</p>;

  return (
    <div className="profile-page max-w-5xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user.username}!</h1>
      </header>

      <div className="user-info mb-8">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">My Experiences</h2>
      <section className="index-card-container">
        {myExperiences.length ? (
          myExperiences.map(exp => (
            <div key={exp.id} className="mb-6">
              <ExpIndexCard experience={exp} />
              <div className="flex gap-3 mt-2">
                <button
                  // onClick={() => navigate(`/edit-exp/${exp.id}`)}
                  onClick={() => navigate(`/experiences/${exp.id}/edit`)}
                  className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(exp.id)}
                  className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No experiences yet.</p>
        )}
      </section>

      <h2 className="text-2xl font-semibold mb-4">Liked Experiences</h2>
      <section className="index-card-container">
        {likedExperiences.length ? (
          likedExperiences.map(exp => (
            <div key={exp.id} className="mb-6">
              <ExpIndexCard experience={exp} />
            </div>
          ))
        ) : (
          <p>You haven't liked any experiences yet.</p>
        )}
      </section>
    </div>
  );
}
