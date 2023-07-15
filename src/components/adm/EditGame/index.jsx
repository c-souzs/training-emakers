import ButtonSecondary from '../../ui/ButtonSecondary'
import Input from '../../ui/Input'
import InputFile from '../../ui/InputFile'
import Textarea from '../../ui/Textarea'
import CrudSection from '../CrudSection'
import * as S from './styles'
import ModeEditIcon from '@mui/icons-material/ModeEdit'

export default function EditGame() {
    return (
        <CrudSection title="Editar Jogo">
            <S.Form>
                <Input placeholder="Título do jogo" required />
                <Input placeholder="Gênero" required />
                <Textarea placeholder="Descrição" required />
                <InputFile label="Inserir imagem" required />
                <S.ContainerButton>
                    <ButtonSecondary text="Modificar" icon={ModeEditIcon} />
                </S.ContainerButton>
            </S.Form>
        </CrudSection>
    )
}
