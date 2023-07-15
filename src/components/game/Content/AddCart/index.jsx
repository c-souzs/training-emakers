import { useParams, useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import * as S from './styles'

export default function AddCart() {
    const { id } = useParams()
    const navigate = useNavigate()

    const getCartFromLocalStorage = () => {
        const cart = localStorage.getItem('cart')
        return cart ? JSON.parse(cart) : []
    }

    const saveCartToLocalStorage = (cartItems) => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const saveLocalStorage = () => {
        const cartItems = getCartFromLocalStorage()
        if (!cartItems.includes(id)) {
            saveCartToLocalStorage([...cartItems, id])
            navigate('/shopping-cart')
        }
    }

    return (
        <S.Container>
            <S.Button onClick={saveLocalStorage}>
                <ShoppingCartIcon
                    style={{ fontSize: '28px', color: '#FBF6F0' }}
                />
            </S.Button>
        </S.Container>
    )
}
