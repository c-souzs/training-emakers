import * as S from './styles'

export default function Textarea({ label, ...rest }) {
    return (
        <S.Container>
            {label && <S.Label>{label}</S.Label>}
            <S.Textarea {...rest} />
        </S.Container>
    )
}
