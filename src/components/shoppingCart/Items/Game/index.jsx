import * as S from './styles'

export default function ShoppingCardGame({ data }) {
    const { name, description, price, banner } = data
    return (
        <S.Container>
            <S.Information>
                <div>
                    <S.Title>{name}</S.Title>
                    <S.Description>{description}</S.Description>
                </div>
                <S.Price>R$ ${price}</S.Price>
            </S.Information>
            <S.Image src={banner} alt={name} />
        </S.Container>
    )
}
