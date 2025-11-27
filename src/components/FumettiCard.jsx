export default function FumettiCard(props) { // props.key / props.image / props.series
    return (
        <div className="col">
            <img src={props.image} alt="" />
            <h3>{props.series}</h3>
        </div>
    );
}