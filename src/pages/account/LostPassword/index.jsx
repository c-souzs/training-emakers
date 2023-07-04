import AccountFooter from '../../../components/account/Footer'
import AccountMain from '../../../components/account/Main'
import LostPasswordStruct from '../../../components/account/lostPassword/Struct'

export default function LostPassword() {
    return (
        <AccountMain>
            <LostPasswordStruct />
            <AccountFooter showLinkLogin />
        </AccountMain>
    )
}
