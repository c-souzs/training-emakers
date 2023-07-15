import * as S from './styles'

export default function GameAssessment({ assessment }) {
    return <S.Assessment>{Number(assessment).toFixed(1)}</S.Assessment>
}
