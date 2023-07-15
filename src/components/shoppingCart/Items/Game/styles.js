import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 48px;

    @media (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`
export const Information = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fbf6f0;
`
export const Title = styled.h5`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 8px;
`
export const Description = styled.p`
    font-size: 14px;
    margin-bottom: 12px;
`

export const Price = styled.p`
    font-size: 20px;
    font-weight: 600;
`
export const Image = styled.img`
    width: 100%;
    height: 250px;
    border-radius: 4px;
`
