import * as S from './styles'

export default function CrudSection({ title, light = false, children }) {
    return (
        <S.Container light={light ? 1 : 0}>
            <S.Title light={light ? 1 : 0}>{title}</S.Title>
            <S.Form>{children}</S.Form>
        </S.Container>
    )
}
