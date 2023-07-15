import * as S from './styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
export default function LinkShoppingCart() {
    return (
        <S.Container>
            <S.LinkShoppingCart to="/shopping-cart">
                <ShoppingCartIcon
                    style={{ fontSize: '28px', color: '#FBF6F0' }}
                />
            </S.LinkShoppingCart>
        </S.Container>
    )
}
