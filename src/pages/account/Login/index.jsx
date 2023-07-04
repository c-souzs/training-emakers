import AccountFooter from '../../../components/account/Footer'
import AccountMain from '../../../components/account/Main'
import LoginStruct from '../../../components/account/login/Struct'

export default function Login() {
    return (
        <AccountMain>
            <LoginStruct />
            <AccountFooter showLinkRegister showLinkLostPassword />
        </AccountMain>
    )
}
