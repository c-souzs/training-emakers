import * as S from './styles'

export default function Input({ label, type = 'text', ...rest }) {
    return (
        <S.Container>
            {label && <S.Label>{label}</S.Label>}
            <S.Input type={type} {...rest} />
        </S.Container>
    )
}
