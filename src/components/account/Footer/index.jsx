import * as S from './styles'

export default function AccountFooter({
    showLinkRegister = false,
    showLinkLogin = false,
    showLinkLostPassword = false,
}) {
    return (
        <S.Container>
            {showLinkLogin && (
                <S.LinkStyled to="/account/login">Fazer login</S.LinkStyled>
            )}
            {showLinkRegister && (
                <S.LinkStyled to="/account/register">Criar conta</S.LinkStyled>
            )}
            {showLinkLostPassword && (
                <S.LinkStyled to="/account/lost-password">
                    Esqueceu a senha?
                </S.LinkStyled>
            )}
        </S.Container>
    )
}
