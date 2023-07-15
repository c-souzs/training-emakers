import Loader from '../../ui/Loader'
import GameCard from './Card'
import * as S from './styles'

function transformString(str) {
    const mapAccents = {
        á: 'a',
        à: 'a',
        ã: 'a',
        â: 'a',
        é: 'e',
        è: 'e',
        ê: 'e',
        í: 'i',
        ì: 'i',
        î: 'i',
        ó: 'o',
        ò: 'o',
        õ: 'o',
        ô: 'o',
        ú: 'u',
        ù: 'u',
        û: 'u',
        ç: 'c',
    }

    return str
        .toLowerCase()
        .replace(/[áàãâéèêíìîóòõôúùûç]/g, (match) => mapAccents[match] || '')
}

export default function GameSection({ bgLight = false, title, cards }) {
    return (
        <S.GameSection id={transformString(title)} light={bgLight ? 1 : 0}>
            <S.Container>
                <S.Title light={bgLight ? 1 : 0}>{title}</S.Title>
                <S.ContentGames>
                    {cards.length ? (
                        cards.map((card) => (
                            <GameCard
                                key={card.id}
                                card={card}
                                bgLight={bgLight ? 1 : 0}
                            />
                        ))
                    ) : (
                        <Loader bgLight={bgLight} />
                    )}
                </S.ContentGames>
            </S.Container>
        </S.GameSection>
    )
}
