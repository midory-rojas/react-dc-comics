import style from "./Main.module.css";
import { comics } from "../assets/dc-comics-2/comics"

export default function Main() {
    console.log(comics);
    return (
        <main>
            <section className="main-top"></section>
            <section className="main-bottom">
                <div className="container">
                    <h2>Current Series</h2>
                    <div className="d-flex wrap gap-10">
                        {comics.map((curComic) => (
                            <div className="col" key={curComic.id}>
                                <img src={curComic.thumb} alt="" />
                                <h3>{curComic.series}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}