import { useEffect, useState } from 'react'
import GameSection from '../GameSection'
import useFetchSimulate from '../../../hooks/useFetchSimulate'

export default function Popular() {
    const { data } = useFetchSimulate()
    const [dataCardsPopular, setDataCardsPopular] = useState([])

    useEffect(() => {
        if (data && data.length) {
            const dataPopular = []
            let amount = 0

            data.forEach((card) => {
                const { assessment } = card

                if (assessment >= 4.7 && amount < 5) {
                    amount += 1
                    dataPopular.push(card)
                }
            })

            setDataCardsPopular(dataPopular)
        }
    }, [data])

    return <GameSection title="Populares" cards={dataCardsPopular} bgLight />
}
