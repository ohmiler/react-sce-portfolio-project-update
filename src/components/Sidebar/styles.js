import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledSideNav = styled.div`
    background: #333;

    @media (max-width: 640px) {
        display: none;
    }
`

export const StyledUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

export const StyledLi = styled.li`
    overflow: hidden;
`

export const StyledLink = styled(NavLink)`
    width: 100%;
    display: inline-block;
    padding: 1rem;
    text-decoration: none;
    color: #fff;
    transition: 0.3s;
    &:hover {
        background: #111;
    }
    &.active {
        background: #111;
    }
`