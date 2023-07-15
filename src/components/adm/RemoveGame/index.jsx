import ButtonPrimary from '../../ui/ButtonPrimary'
import Input from '../../ui/Input'
import CrudSection from '../CrudSection'
import * as S from './styles'
import RemoveIcon from '@mui/icons-material/Remove'

export default function RemoveGame() {
    return (
        <CrudSection title="Remover jogo" light>
            <S.Form>
                <Input placeholder="Título do jogo ou Id" required />
                <S.ContainerButton>
                    <ButtonPrimary text="Remover" icon={RemoveIcon} />
                </S.ContainerButton>
            </S.Form>
        </CrudSection>
    )
}
