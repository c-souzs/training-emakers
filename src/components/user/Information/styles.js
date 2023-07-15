import styled from 'styled-components'

export const UserInformation = styled.section`
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 64px;
    padding: 64px 0;

    @media (max-width: 1200px) {
        justify-content: center;
    }

    @media (max-width: 500px) {
        padding: 64px 48px;
        margin-left: 0;
    }
`

export const TitleName = styled.h1`
    font-size: 32px;
    font-weight: 500;
    color: #4b626c;
    margin-bottom: 24px;
`
export const ContainerTextInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
`

export const TextInformation = styled.p`
    font-size: 16px;
    color: #4b626c;
`
export const ContainerButtons = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;
`
