import ButtonSecondary from '../../ui/ButtonSecondary'
import Input from '../../ui/Input'
import InputFile from '../../ui/InputFile'
import Textarea from '../../ui/Textarea'
import CrudSection from '../CrudSection'
import * as S from './styles'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'

export default function RegisterGame() {
    return (
        <CrudSection title="Cadastrar jogo">
            <S.Form>
                <Input placeholder="Título do jogo" required />
                <Input placeholder="Gênero" required />
                <Textarea placeholder="Descrição" required />
                <InputFile label="Inserir imagem" required />
                <S.ContainerButton>
                    <ButtonSecondary text="Cadastrar" icon={ContentPasteIcon} />
                </S.ContainerButton>
            </S.Form>
        </CrudSection>
    )
}
