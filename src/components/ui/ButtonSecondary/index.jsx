import * as S from './styles'

export default function ButtonSecondary({ text, icon: Icon, animate = false }) {
    return (
        <S.ButtonSecondary animate={animate ? 1 : 0}>
            {text}
            {Icon && <Icon style={{ fontSize: 20, color: 'currentColor' }} />}
        </S.ButtonSecondary>
    )
}
