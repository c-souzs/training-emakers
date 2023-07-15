import { Link } from 'react-router-dom'
import * as S from './styles'

export default function GameCard({ bgLight, card }) {
    const { id, banner, price, discount } = card
    const priceNumber = Number(price.replace(',', '.'))

    const formattedPrice = (value) => {
        const formattedValue = value.toFixed(2).replace('.', ',')
        return `R$ ${formattedValue}`
    }

    const calculateDiscountedPrice = () => {
        if (discount) {
            const discountedPrice = priceNumber - (discount / 100) * priceNumber
            return formattedPrice(discountedPrice)
        }
        return formattedPrice(priceNumber)
    }

    return (
        <S.Container>
            <Link to={`/game/${id}`}>
                <S.Image src={banner} />
                <S.ContainerPrice>
                    <S.Price light={bgLight ? 1 : 0}>
                        {calculateDiscountedPrice()}
                    </S.Price>
                </S.ContainerPrice>
            </Link>
        </S.Container>
    )
}
