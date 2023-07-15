import PixIcon from '../../../assets/svg/PixIcon'
import ButtonPrimary from '../../ui/ButtonPrimary'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import * as S from './styles'
import InputCheckbox from '../../ui/InputCheckbox'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ShoppingCartPayment() {
    const [hasCarts, setHasCarts] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const carts = localStorage.getItem('cart')

        if (carts) setHasCarts(true)
    }, [])

    const handlePurchaseItens = (e) => {
        e.preventDefault()
        const purchase = localStorage.getItem('purchase')

        if (!purchase) localStorage.setItem('purchase', JSON.stringify([]))

        const carts = localStorage.getItem('cart')
        const dataCarts = JSON.parse(carts)

        localStorage.setItem('purchase', JSON.stringify([...dataCarts]))
        localStorage.setItem('cart', JSON.stringify([]))

        navigate('/user')
    }
    return (
        <S.ShoopingCartPayment>
            <div>
                <S.ContainerPix>
                    <PixIcon />
                    {!hasCarts && (
                        <S.InformationPix>
                            Adicione produtos ao carrinho e pague usando o
                            sistema pix!
                        </S.InformationPix>
                    )}
                </S.ContainerPix>
                {hasCarts && (
                    <form onSubmit={handlePurchaseItens}>
                        <InputCheckbox label="Aceito os termos e condições" />
                        <S.ContainerButton>
                            <ButtonPrimary
                                text="Finalizar compra"
                                icon={ShoppingCartIcon}
                            />
                        </S.ContainerButton>
                    </form>
                )}
            </div>
        </S.ShoopingCartPayment>
    )
}
