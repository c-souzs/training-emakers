import * as S from './styles'
import logo from '../../../assets/imgs/logo.png'
import Input from '../Input'

const optionsMenu = [
    {
        label: 'Lançamentos',
        href: '#lancamentos',
    },
    {
        label: 'Populares',
        href: '/',
    },
    {
        label: 'Gêneros',
        href: '/',
    },
    {
        label: 'Promoções',
        href: '/',
    },
    {
        label: 'Conta',
        href: '/account/login',
    },
]

export default function Header() {
    return (
        <S.Header>
            <S.Container>
                <S.Logo src={logo} alt="Logo from website" />
                <nav>
                    <S.Menu>
                        {optionsMenu.map(({ label, href }) => {
                            return (
                                <S.MenuItemContainer
                                    key={`${label.toString()}-${href}`}
                                >
                                    <S.MenuItemLink to={href}>
                                        {label}
                                    </S.MenuItemLink>
                                </S.MenuItemContainer>
                            )
                        })}
                    </S.Menu>
                </nav>
                <div>
                    <Input type="search" placeholder="Pesquisar jogos" />
                </div>
            </S.Container>
        </S.Header>
    )
}
