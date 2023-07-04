import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import Input from '../../../../ui/Input'
import Button from '../../../../ui/Button'
import * as S from './styles'

export default function LoginForm() {
    return (
        <S.Form action="">
            <Input type="email" placeholder="E-mail" required />
            <Input type="password" placeholder="Senha" required />
            <Button text="Acessar conta" animate icon={EastOutlinedIcon} />
        </S.Form>
    )
}
