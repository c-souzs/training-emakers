import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import Input from '../../../../ui/Input'
import ButtonPrimary from '../../../../ui/ButtonPrimary'
import * as S from './styles'

export default function LoginForm() {
    return (
        <S.Form action="">
            <Input type="email" placeholder="E-mail" required />
            <Input type="password" placeholder="Senha" required />
            <ButtonPrimary
                text="Acessar conta"
                animate
                icon={EastOutlinedIcon}
            />
        </S.Form>
    )
}
