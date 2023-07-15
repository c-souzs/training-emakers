import * as S from './styles'
import GamesGame from './Game'
import { useEffect, useState } from 'react'
import useFetchSimulate from '../../../hooks/useFetchSimulate'
import Loader from '../../ui/Loader'

export default function UserGames() {
    const [indexItensCart, setIndexItensCart] = useState([])
    const [dataItensCart, setDataItensCart] = useState([])

    const { data } = useFetchSimulate()

    useEffect(() => {
        const cart = localStorage.getItem('cart')

        if (cart) setIndexItensCart(JSON.parse(cart))

        const purchase = localStorage.getItem('purchase')
        if (purchase) setIndexItensCart([...JSON.parse(purchase)])
    }, [])

    useEffect(() => {
        if (indexItensCart.length) {
            const dataItensCart = data.filter(({ id }) =>
                indexItensCart.includes(id.toString()),
            )

            setDataItensCart([...dataItensCart])
        }
    }, [indexItensCart, data])

    return (
        <S.UserGames>
            <S.Container>
                <S.Title>Jogos adquiridos</S.Title>
                <S.ContainerGames>
                    {indexItensCart.length !== 0 ? (
                        <>
                            {dataItensCart.length !== 0 ? (
                                <>
                                    {indexItensCart &&
                                        indexItensCart.length &&
                                        dataItensCart.map(
                                            ({ banner, name, id }) => {
                                                return (
                                                    <GamesGame
                                                        banner={banner}
                                                        name={name}
                                                        key={`${name}-${id}`}
                                                    />
                                                )
                                            },
                                        )}
                                </>
                            ) : (
                                <Loader />
                            )}
                        </>
                    ) : (
                        <S.PurchaseEmpty>
                            Nenhuma compra realizada 😞
                        </S.PurchaseEmpty>
                    )}
                </S.ContainerGames>
            </S.Container>
        </S.UserGames>
    )
}
