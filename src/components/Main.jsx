import style from "./Main.module.css";
import { comics } from "../assets/dc-comics-2/comics"
import FumettiList from "./FumettiList";


export default function Main() {
    console.log(comics);
    return (
        <main>
            <section className="main-top"></section>
            <section className="main-bottom">
                <div className="container">
                    <div className="btn">CURRENT SERIES</div>
                    <FumettiList />
                    <div className="btn">LOAD MORE</div>
                </div>
            </section>
        </main>
    );
}