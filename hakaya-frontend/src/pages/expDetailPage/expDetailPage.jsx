// import "./styles.css";
import explore from "../../assets/images/1.png"

export default function CatIndexPage() {
    return (<>
        <section className="page-header">
        <div className="header-content">
            <img src={explore} alt="explore" className="header-icon" />
            <div>
            <h1>Step Into a World of Experiences</h1>
            <p>Embark on a journey of discovery and joy, where every experience tells a new story.</p>
            </div>
        </div>
        </section>

    </>)
}