import * as S from './styles'

export default function GameImage({ banner, alt }) {
    return (
        <S.ContainerImage>
            <S.Image src={banner} alt={alt} />
        </S.ContainerImage>
    )
}
