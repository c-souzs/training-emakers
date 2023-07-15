import * as S from './styles'

export default function Card({ dataCard }) {
    const formattedPrice = (value) => {
        const formattedValue = value.toFixed(2).replace('.', ',')
        return `R$ ${formattedValue}`
    }

    const calculateDiscountedPrice = (discount, price) => {
        const priceNumber = Number(price.replace(',', '.'))

        if (discount) {
            const discountedPrice = priceNumber - (discount / 100) * priceNumber
            return formattedPrice(discountedPrice)
        }
        return formattedPrice(priceNumber)
    }

    return (
        <>
            {dataCard.map(({ id, banner, discount, price }, index) => {
                let position = ''

                switch (index) {
                    case 0:
                        position = 'top'
                        break
                    case 1:
                        position = 'bottom'
                        break
                    case 2:
                        position = 'column'
                        break
                    default:
                        position = ''
                }
                return (
                    <S.Card
                        position={position}
                        key={`card-${index}-price-${price}`}
                    >
                        <S.LinkCustom to={`/game/${id}`}>
                            <S.Image src={banner} />
                            <S.ContainerPrice>
                                {discount && (
                                    <S.Discount>-{discount} %</S.Discount>
                                )}
                                <S.Price>
                                    {calculateDiscountedPrice(discount, price)}
                                </S.Price>
                            </S.ContainerPrice>
                        </S.LinkCustom>
                    </S.Card>
                )
            })}
        </>
    )
}
