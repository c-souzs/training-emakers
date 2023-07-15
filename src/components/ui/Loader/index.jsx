import * as S from './styles'

export default function Loader({ bgLight }) {
    return (
        <S.ContainerLoader>
            <S.Loader light={bgLight ? 1 : 0} />
            <S.TextLoader light={bgLight ? 1 : 0}>Carregando...</S.TextLoader>
        </S.ContainerLoader>
    )
}
