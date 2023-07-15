import AccountFooter from '../../../components/account/Footer'
import AccountMain from '../../../components/account/Main'
import LostPasswordStruct from '../../../components/account/lostPassword/Struct'
import useTitlePage from '../../../hooks/useTitlePage'

export default function LostPassword() {
    useTitlePage('Recuperar senha')
    return (
        <AccountMain>
            <LostPasswordStruct />
            <AccountFooter showLinkLogin />
        </AccountMain>
    )
}
