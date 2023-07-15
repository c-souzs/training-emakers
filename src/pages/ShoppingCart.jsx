import ShoppingCartItems from '../components/shoppingCart/Items'
import ShoppingCartMain from '../components/shoppingCart/Main'
import ShoppingCartPayment from '../components/shoppingCart/Payment'
import useTitlePage from '../hooks/useTitlePage'

export default function ShoppingCart() {
    useTitlePage('Carrinho de compras')
    return (
        <ShoppingCartMain>
            <ShoppingCartItems />
            <ShoppingCartPayment />
        </ShoppingCartMain>
    )
}
