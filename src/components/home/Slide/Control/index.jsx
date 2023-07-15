import * as S from './styles'

export default function Control({ changeActive, amount, active }) {
    return (
        <S.Container>
            <S.Content>
                {Array(amount)
                    .fill(undefined)
                    .map((_, index) => {
                        return (
                            <S.Button
                                active={active === index ? 1 : 0}
                                onClick={() => changeActive(index)}
                                key={`button-control-slide-${index}`}
                            />
                        )
                    })}
            </S.Content>
        </S.Container>
    )
}
