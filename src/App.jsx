import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyles'
import LayoutRoot from './components/ui/Layouts/Root'
import Home from './pages/Home'
import User from './pages/User'
import ShoppingCart from './pages/ShoppingCart'
import Login from './pages/account/Login'
import Register from './pages/account/Register'
import LostPassword from './pages/account/LostPassword'
import LayoutAccount from './components/ui/Layouts/Account'

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route
                    path="/"
                    element={
                        <LayoutRoot>
                            <Home />
                        </LayoutRoot>
                    }
                />
                <Route
                    path="/user"
                    element={
                        <LayoutRoot>
                            <User />
                        </LayoutRoot>
                    }
                />
                <Route
                    path="/shopping-cart"
                    element={
                        <LayoutRoot>
                            <ShoppingCart />
                        </LayoutRoot>
                    }
                />
                <Route path="/account" element={<LayoutAccount />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="lost-password" element={<LostPassword />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
