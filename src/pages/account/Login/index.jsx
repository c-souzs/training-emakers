import AccountFooter from '../../../components/account/Footer'
import AccountMain from '../../../components/account/Main'
import LoginStruct from '../../../components/account/login/Struct'
import useTitlePage from '../../../hooks/useTitlePage'

export default function Login() {
    useTitlePage('Login')
    return (
        <AccountMain>
            <LoginStruct />
            <AccountFooter showLinkRegister showLinkLostPassword />
        </AccountMain>
    )
}
