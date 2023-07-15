import * as S from './styles'

export default function GameContainer({ children }) {
    return (
        <S.Game>
            <S.Container>{children}</S.Container>
        </S.Game>
    )
}
