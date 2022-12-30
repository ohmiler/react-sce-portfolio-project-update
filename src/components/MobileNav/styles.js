import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
    display: none;

    @media (max-width: 640px) {
        display: block;
    }
`

export const Spacer = styled.div`
    height: 48px;
`

export const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1;
`

export const MobileLink = styled(NavLink)`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    background: #333;
    &:hover {
        background: #111;
    }
    &.active {
        background: #111;
    }
`