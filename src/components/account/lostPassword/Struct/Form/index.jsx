import ButtonPrimary from '../../../../ui/ButtonPrimary'
import Input from '../../../../ui/Input'
import * as S from './styles'

export default function LostPasswordForm() {
    return (
        <S.Form action="">
            <Input type="email" placeholder="E-mail" required />
            <ButtonPrimary text="Recuperar conta" />
        </S.Form>
    )
}
