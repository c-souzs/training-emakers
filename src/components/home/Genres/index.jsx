import GameSection from '../GameSection'
import useFetchSimulate from '../../../hooks/useFetchSimulate'
import { useEffect, useState } from 'react'

export default function Genres() {
    const { data } = useFetchSimulate()
    const [dataCardsGenres, setDataCardsGenres] = useState([])

    useEffect(() => {
        if (data && data.length) {
            let amount = 0
            const cardsGenres = []

            data.forEach((card) => {
                const { genre } = card

                if (
                    (genre === 'RPG' || genre === 'Battle royale') &&
                    amount < 5
                ) {
                    amount += 1
                    cardsGenres.push(card)
                }
            })

            setDataCardsGenres([...cardsGenres])
        }
    }, [data])

    return <GameSection title="Gêneros" cards={dataCardsGenres} />
}
