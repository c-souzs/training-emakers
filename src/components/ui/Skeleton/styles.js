import styled, { keyframes } from 'styled-components'

const animationSkeleton = keyframes`
    from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`
export const Skeleton = styled.div`
    width: 100%;
    grid-column: 1/-1;
    min-height: inherit;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;

    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);

    animation: ${animationSkeleton} 5s infinite linear;
    background-size: 200%;
`
