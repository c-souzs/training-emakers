import * as S from './styles'

export default function Button({ text, icon: Icon, animate = false }) {
    return (
        <S.Button animate={animate}>
            {text}
            {Icon && <Icon style={{ fontSize: 20, color: 'currentColor' }} />}
        </S.Button>
    )
}
