import { useState } from 'react'
import * as S from './styles'
import StarIcon from '@mui/icons-material/Star'

export default function GamesGame({ banner, name }) {
    const [activeIndex, setActiveIndex] = useState(-1)

    return (
        <div>
            <S.GameImage src={banner} alt={name} />
            <S.ContainerAssess>
                {[...Array(5)].map((_, index) => (
                    <StarIcon
                        key={`start-assess-${index}`}
                        className={index <= activeIndex ? 'active' : null}
                        onMouseOver={() => setActiveIndex(index)}
                    />
                ))}
            </S.ContainerAssess>
        </div>
    )
}
