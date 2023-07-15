import styled from 'styled-components'

export const ShoppingCartItems = styled.section`
    background-color: #4b626c;
`

export const Container = styled.div`
    padding: 48px 64px;
    height: 100%;

    @media (max-width: 820px) {
        padding: 48px 32px;
    }
`
export const Title = styled.h3`
    font-size: 28px;
    font-weight: 300;
    color: #fbf6f0;
    margin-bottom: 32px;
`
export const CartGames = styled.div`
    margin: 0 auto;
    width: 50%;

    @media (max-width: 1200px) {
        width: 70%;
    }
`
export const Games = styled.div`
    max-height: 50vh;
    height: 100%;
    overflow-y: auto;
    padding-right: 8px;
`

export const Decoration = styled.span`
    display: block;
    width: 100%;
    height: 1px;
    background-color: #fbf6f0;
    border-radius: 4px;
    margin: 32px 0;
`

export const Prices = styled.div`
    display: flex;
    justify-content: space-between;

    color: #fbf6f0;
    font-size: 20px;
    font-weight: 600;
`
export const CartEmpty = styled.p`
    color: #fbf6f0;
    text-align: center;
`
