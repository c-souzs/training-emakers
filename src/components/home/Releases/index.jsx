import { useEffect, useState } from 'react'
import GameSection from '../GameSection'
import useFetchSimulate from '../../../hooks/useFetchSimulate'

export default function Releases() {
    const { data } = useFetchSimulate()
    const [dataCardsReleases, setDataCardsReleases] = useState([])

    useEffect(() => {
        if (data && data.length) {
            const dataReleases = []
            let amount = 0

            data.forEach((card) => {
                const data = new Date(card.releaseDate)
                const oneYearAgo = new Date()
                oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

                if (data >= oneYearAgo && amount < 5) {
                    amount += 1
                    dataReleases.push(card)
                }
            })

            setDataCardsReleases(dataReleases)
        }
    }, [data])

    return <GameSection title="Lançamentos" cards={dataCardsReleases} />
}
