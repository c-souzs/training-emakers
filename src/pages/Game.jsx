import { useParams } from 'react-router-dom'
import Content from '../components/game/Content'

export default function Game() {
    const { id } = useParams()

    return (
        <main>
            <Content id={id} />
        </main>
    )
}
