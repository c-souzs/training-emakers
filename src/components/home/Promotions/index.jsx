import { useEffect, useState } from 'react'
import GameSection from '../GameSection'
import useFetchSimulate from '../../../hooks/useFetchSimulate'

export default function Promotions() {
    const { data } = useFetchSimulate()
    const [dataCardsPromotions, setDataCardsPromotions] = useState([])

    useEffect(() => {
        if (data && data.length) {
            const dataPromotions = []
            let amount = 0

            data.forEach((card) => {
                const { discount } = card

                if (discount && discount >= 10 && amount < 5) {
                    amount += 1
                    dataPromotions.push(card)
                }
            })

            setDataCardsPromotions(dataPromotions)
        }
    }, [data])

    return <GameSection title="Promoções" cards={dataCardsPromotions} bgLight />
}
