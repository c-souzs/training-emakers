import { useEffect, useState } from 'react'
import GameAssessment from './Assessment'
import GameContainer from './Container'
import GameImage from './Image'
import GameInformation from './Information'
import useFetchSimulate from '../../../hooks/useFetchSimulate'
import Skeleton from '../../ui/Skeleton'
import AddCart from './AddCart'

export default function Content({ id }) {
    const [dataGame, setDataGame] = useState(null)
    const { data } = useFetchSimulate()
    const [bought, setBought] = useState(false)

    useEffect(() => {
        if (data) {
            let dataGameToId

            data.forEach((game) => {
                const { id: idGame } = game

                if (idGame === Number(id)) {
                    dataGameToId = game
                }
            })

            setDataGame(dataGameToId)
        }
    }, [data, id])

    useEffect(() => {
        const purchase = localStorage.getItem('purchase')
        if (purchase) {
            const purchaseData = JSON.parse(purchase)
            if (purchaseData.includes(id.toString())) setBought(true)
            else setBought(false)
        } else setBought(false)
    }, [id])

    return (
        <GameContainer>
            {dataGame ? (
                <>
                    <GameAssessment assessment={dataGame.assessment} />
                    <GameImage banner={dataGame.banner} alt={dataGame.name} />
                    <GameInformation
                        id={dataGame.id}
                        name={dataGame.name}
                        description={dataGame.description}
                        hasReembolso={bought}
                    />
                    {!bought && <AddCart />}
                </>
            ) : (
                <Skeleton />
            )}
        </GameContainer>
    )
}
