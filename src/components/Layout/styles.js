import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

export const StyledContent = styled.div`
    min-height: 100vh;
`