import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    from{
        transform: rotateX(0) rotateY(0);
    }
    50%{
        transform: rotateX(180deg) rotateY(0);
    }
    to{
        transform: rotateX(180deg) rotateY(180deg);
    }
`

export const ContainerLoader = styled.div`
    width: 100%;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 1/-1;
`

export const Loader = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 0.25rem;
    background-color: ${({ light }) => (light ? '#4b626c' : '#fbf8f3')};
    animation: ${animate} 1s infinite;
`
export const TextLoader = styled.p`
    font-size: 14px;
    color: ${({ light }) => (light ? '#4b626c' : '#fbf8f3')};
    margin-top: 6px;
`
