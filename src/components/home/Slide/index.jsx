import { useEffect, useRef, useState } from 'react'
import Card from './Card'
import Control from './Control'
import * as S from './styles'
import useFetchSimulate from '../../../hooks/useFetchSimulate'
import Skeleton from '../../ui/Skeleton'

export default function Slide() {
    const { data } = useFetchSimulate()
    const [dataSlide, setDataSlide] = useState([])

    const [active, setActive] = useState(0)
    const [resize, setResize] = useState(false)
    const [widthCard, setWidthCard] = useState(0)
    const contentRef = useRef(null)

    const changeActive = (newActive) => setActive(newActive)

    useEffect(() => {
        if (contentRef && contentRef.current)
            setWidthCard(contentRef.current.clientWidth)
    }, [contentRef, dataSlide, resize])

    useEffect(() => {
        if (data && data.length) {
            let amount = 0
            const contentSlide = data.reduce((acc, game, index) => {
                const { discount } = game
                if (discount && index % 3 === 0 && amount < 6) {
                    acc.push(data.slice(index, index + 3))
                    amount++
                }

                return acc
            }, [])

            setDataSlide(contentSlide)
        }
    }, [data])

    useEffect(() => {
        const handleResize = () => setResize((old) => !old)

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section>
            <S.Container>
                <S.ContainerSlide>
                    <S.Content move={active * widthCard}>
                        {data.length ? (
                            dataSlide.map((data, index) => {
                                return (
                                    <S.CardContainer
                                        ref={contentRef}
                                        key={`data-card-${index}`}
                                    >
                                        <Card dataCard={data} />
                                    </S.CardContainer>
                                )
                            })
                        ) : (
                            <Skeleton />
                        )}
                    </S.Content>
                </S.ContainerSlide>
                {data.length ? (
                    <Control
                        changeActive={changeActive}
                        amount={dataSlide.length}
                        active={active}
                    />
                ) : undefined}
            </S.Container>
        </section>
    )
}
