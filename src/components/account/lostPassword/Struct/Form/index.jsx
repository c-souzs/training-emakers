import Button from '../../../../ui/Button'
import Input from '../../../../ui/Input'
import * as S from './styles'

export default function LostPasswordForm() {
    return (
        <S.Form action="">
            <Input type="email" placeholder="E-mail" required />
            <Button text="Recuperar conta" />
        </S.Form>
    )
}
