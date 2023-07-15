import { useEffect, useState } from 'react'
import ShoppingCardGame from './Game'
import * as S from './styles'
import useFetchSimulate from '../../../hooks/useFetchSimulate'
import Loader from '../../ui/Loader'

export default function ShoppingCartItems() {
    const [indexItemsCart, setIndexItemsCart] = useState([])
    const [dataItemsCart, setDataItemsCart] = useState([])

    const { data } = useFetchSimulate()

    useEffect(() => {
        const cart = localStorage.getItem('cart')

        if (cart) setIndexItemsCart(JSON.parse(cart))
    }, [])

    useEffect(() => {
        if (indexItemsCart.length) {
            const dataItemsCart = data.filter(({ id }) =>
                indexItemsCart.includes(id.toString()),
            )

            setDataItemsCart(dataItemsCart)
        }
    }, [indexItemsCart, data])

    return (
        <S.ShoppingCartItems>
            <S.Container>
                <S.Title>Carrinho de compras</S.Title>
                <S.CartGames>
                    {indexItemsCart.length !== 0 ? (
                        <>
                            {dataItemsCart.length !== 0 ? (
                                <>
                                    <S.Games>
                                        {indexItemsCart &&
                                            indexItemsCart.length &&
                                            dataItemsCart.map((game) => {
                                                return (
                                                    <ShoppingCardGame
                                                        data={game}
                                                        key={`${game.name}-${game.id}`}
                                                    />
                                                )
                                            })}
                                    </S.Games>
                                    <S.Decoration />
                                    <S.Prices>
                                        <p>Total</p>
                                        <p>
                                            R${' '}
                                            {dataItemsCart.reduce(
                                                (acc, game) => {
                                                    const priceClear =
                                                        game.price.replace(
                                                            ',',
                                                            '.',
                                                        )
                                                    const priceNumber =
                                                        Number(priceClear)

                                                    return (acc += priceNumber)
                                                },
                                                0,
                                            )}
                                        </p>
                                    </S.Prices>
                                </>
                            ) : (
                                <Loader />
                            )}
                        </>
                    ) : (
                        <S.CartEmpty>Carrinho vazio 😞</S.CartEmpty>
                    )}
                </S.CartGames>
            </S.Container>
        </S.ShoppingCartItems>
    )
}
