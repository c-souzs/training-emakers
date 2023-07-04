import * as S from './styles'

import { Outlet } from 'react-router-dom'
import banner from '../../../../assets/imgs/banner.png'

export default function LayoutAccount() {
    return (
        <S.Account>
            <S.ContainerOutlet>
                <Outlet />
            </S.ContainerOutlet>
            <section>
                <S.Banner src={banner} alt="Banner site" />
            </section>
        </S.Account>
    )
}
