import AccountFooter from '../../../components/account/Footer'
import AccountMain from '../../../components/account/Main'
import RegisterStruct from '../../../components/account/register/Struct'
import useTitlePage from '../../../hooks/useTitlePage'

export default function Register() {
    useTitlePage('Cadastro')
    return (
        <AccountMain>
            <RegisterStruct />
            <AccountFooter showLinkLogin />
        </AccountMain>
    )
}
