import styled from 'styled-components'

export const Assessment = styled.span`
    position: absolute;
    top: -25px;
    left: -25px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #4b626c;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fbf6f0;
    font-size: 20px;
    font-weight: 600;

    @media (max-width: 500px) {
        font-size: 18px;
        width: 55px;
        height: 55px;
    }
`
