import Genres from '../components/home/Genres'
import LinkShoppingCart from '../components/home/LinkShoppingCart'
import Popular from '../components/home/Popular'
import Promotions from '../components/home/Promotions'
import Releases from '../components/home/Releases'
import Slide from '../components/home/Slide'
import useTitlePage from '../hooks/useTitlePage'

export default function Home() {
    useTitlePage('Home')
    return (
        <main>
            <Slide />
            <Releases />
            <Popular />
            <Genres />
            <Promotions />
            <LinkShoppingCart />
        </main>
    )
}
