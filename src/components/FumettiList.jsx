import { comics } from "../assets/dc-comics-2/comics";
import FumettiCard from "./FumettiCard";

export default function FumettiList() {
    return (
        <div className="d-flex wrap gap-10 text-center">
            {comics.map((curComic) => (
                <FumettiCard
                    key={curComic.id}
                    image={curComic.thumb}
                    title={curComic.title}
                />
            ))}
        </div>
            )
}