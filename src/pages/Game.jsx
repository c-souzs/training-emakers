import { useParams } from "react-router-dom";

export default function Game() {
    const { slug } = useParams();

    console.log(slug);

    return <div>{slug}</div>;
}
