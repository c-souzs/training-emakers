import * as S from './styles'
import logo from '../../../assets/imgs/logo.png'
import Input from '../Input'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const optionsMenu = [
    {
        label: 'Lançamentos',
        href: '#lancamentos',
    },
    {
        label: 'Populares',
        href: '#populares',
    },
    {
        label: 'Gêneros',
        href: '#generos',
    },
    {
        label: 'Promoções',
        href: '#promocoes',
    },
    {
        label: 'Conta',
        href: '/account/login',
    },
]

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false)

    return (
        <S.Header>
            <S.Container>
                <Link to="/">
                    <S.Logo src={logo} alt="Logo from website" />
                </Link>
                <S.ButtonMenuMobile
                    onClick={() => setActiveMenu(!activeMenu)}
                    active={activeMenu ? 1 : 0}
                />
                <S.Nav active={activeMenu ? 1 : 0}>
                    <S.Menu>
                        {optionsMenu.map(({ label, href }) => {
                            return (
                                <S.MenuItemContainer
                                    key={`${label.toString()}-${href}`}
                                >
                                    <S.MenuItemLink href={href}>
                                        {label}
                                    </S.MenuItemLink>
                                </S.MenuItemContainer>
                            )
                        })}
                    </S.Menu>
                </S.Nav>
                <S.ContainerInput>
                    <Input type="search" placeholder="Pesquisar jogos" />
                </S.ContainerInput>
            </S.Container>
        </S.Header>
    )
}
