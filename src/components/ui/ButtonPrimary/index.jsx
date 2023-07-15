import * as S from './styles'

export default function ButtonPrimary({ text, icon: Icon, animate = false }) {
    return (
        <S.Button animate={animate ? 1 : 0}>
            {text}
            {Icon && <Icon style={{ fontSize: 20, color: 'currentColor' }} />}
        </S.Button>
    )
}
