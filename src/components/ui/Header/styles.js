import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
    height: 100px;
    box-shadow: 0 1px 1px #0000001a;
`
export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    padding: 8px 16px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.img`
    width: 80px;
    height: 80px;
`
export const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MenuItemContainer = styled.li`
    position: relative;
    padding: 8px 0;
    margin-right: 12px;
    border-right: 2px solid #c6c9ca;

    &:last-child {
        border-right: none;
    }

    &:last-child a {
        margin-right: 0;
    }
`

export const MenuItemLink = styled(Link)`
    font-size: 20px;
    color: #4b626c;
    padding: 6px 4px;
    margin-right: 12px;

    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover {
        color: #000;
    }
`
