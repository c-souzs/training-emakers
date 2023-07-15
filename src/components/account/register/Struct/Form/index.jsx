import ButtonPrimary from '../../../../ui/ButtonPrimary'
import Input from '../../../../ui/Input'

import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import * as S from './styles'

export default function RegisterForm() {
    return (
        <S.Form action="">
            <Input placeholder="Nome de usuário" required />
            <Input type="email" placeholder="E-mail" required />
            <Input placeholder="CPF" required />
            <Input type="password" placeholder="Senha" required />
            <Input type="password" placeholder="Confirmar Senha" required />
            <ButtonPrimary
                text="Acessar conta"
                animate
                icon={EastOutlinedIcon}
            />
        </S.Form>
    )
}
