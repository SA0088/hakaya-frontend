// // import "./styles.css";
// import explore from "../../assets/images/1.png"

// export default function ExpIndexPage() {
//     return (<>
//         <section className="page-header">
//         <div className="header-content">
//             <img src={explore} alt="explore" className="header-icon" />
//             <div>
//             <h1>Step Into a World of Experiences</h1>
//             <p>Embark on a journey of discovery and joy, where every experience tells a new story.</p>
//             </div>
//         </div>
//         </section>

//     </>)
// }


// import "./styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";


export default function expDetailPage() {
    const [expDetail, setexpDetail] = useState(null);
    const { id } = useParams();

    useEffect(() => { 
        async function getAndSetDetail() {
            try {
                const exp = await expAPI.show();
                setexpDetail(exp);
            } catch (err) {
                console.log(err);
                setexpDetail(null);
            }
        }
        if (id) getAndSetDetail()
    }, [id])

    if (!expDetail) return <h3>Experience details will display soon</h3>

    return (
        <section className="detail-exp-container">
          <div className="detail-exp-img">
            <img src={skaterexp} alt="A skater boy exp" />
          </div>
          <div className="exp-details">
            <h1>{ expDetail.title }</h1>
            <h2>{ expDetail.creator.name }</h2>
            <p>{ expDetail.summary}</p>
            <p><small>{expDetail.created_at}</small></p>
            
          </div>
        </section>
    )
}
