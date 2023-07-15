import ButtonSecondary from '../../../ui/ButtonSecondary'
import * as S from './styles'
import PaidIcon from '@mui/icons-material/Paid'

export default function GameInformation({ name, description, hasReembolso }) {
    return (
        <S.ContainerInformation>
            <S.Title>{name}</S.Title>
            <S.Description>{description}</S.Description>
            {hasReembolso && (
                <S.ContainerButton>
                    <ButtonSecondary
                        text="Solicitar reembolso"
                        icon={PaidIcon}
                    />
                </S.ContainerButton>
            )}
        </S.ContainerInformation>
    )
}
