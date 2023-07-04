import AccountFooter from '../../../components/account/Footer'
import AccountMain from '../../../components/account/Main'
import RegisterStruct from '../../../components/account/register/Struct'

export default function Register() {
    return (
        <AccountMain>
            <RegisterStruct />
            <AccountFooter showLinkLogin />
        </AccountMain>
    )
}
