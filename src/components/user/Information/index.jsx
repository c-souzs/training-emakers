import ButtonPrimary from '../../ui/ButtonPrimary'
import * as S from './styles'

import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'

export default function UserInformation() {
    return (
        <S.UserInformation>
            <div>
                <S.TitleName>Olá, Emarkers!</S.TitleName>
                <S.ContainerTextInformation>
                    <S.TextInformation>
                        Seu e-mail é: emarkersjr@gmail.com
                    </S.TextInformation>
                    <S.TextInformation>
                        Seu CPF é: 123.456.789-00
                    </S.TextInformation>
                </S.ContainerTextInformation>
                <S.ContainerButtons>
                    <ButtonPrimary text="Alterar dados" icon={ModeEditIcon} />
                    <ButtonPrimary text="Excluir conta" icon={DeleteIcon} />
                    <ButtonPrimary
                        text="Tela do admin"
                        icon={EastOutlinedIcon}
                        animate
                    />
                </S.ContainerButtons>
            </div>
        </S.UserInformation>
    )
}
