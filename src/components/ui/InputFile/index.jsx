import * as S from './styles'

export default function InputFile({ label, ...rest }) {
    return (
        <S.Container>
            <S.Label>
                {label}
                <S.InputFile type="file" {...rest} />
            </S.Label>
        </S.Container>
    )
}
