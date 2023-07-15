import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ light }) => (light ? '#fbf8f3' : '#4B626C')};
    padding: 38px 28px;
    display: flex;
    flex-direction: column;
`
export const Title = styled.h3`
    font-size: 32px;
    font-weight: 600;
    color: ${({ light }) => (light ? '#4B626C' : '#fbf8f3')};
    margin-bottom: 24px;
    text-align: center;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
`

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
