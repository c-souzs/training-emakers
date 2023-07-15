import UserGames from '../components/user/Games'
import UserInformation from '../components/user/Information'
import UserMain from '../components/user/Main'
import useTitlePage from '../hooks/useTitlePage'

export default function User() {
    useTitlePage('Perfil')
    return (
        <UserMain>
            <UserInformation />
            <UserGames />
        </UserMain>
    )
}
