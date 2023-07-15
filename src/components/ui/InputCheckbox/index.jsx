import * as S from './styles'

export default function InputCheckbox({ label, ...rest }) {
    return (
        <S.Label>
            <S.Input type="checkbox" {...rest} />
            {label}
        </S.Label>
    )
}
