import React from 'react'
import { Container, Spacer, NavWrapper, MobileLink } from './styles'
import { FaHouseUser, FaCode, FaBorderAll, FaBook } from "react-icons/fa";

function MobileNav() {
  return (
    <Container>
        <Spacer />
        <NavWrapper>
            <MobileLink to="/">
                <FaHouseUser />
            </MobileLink>
            <MobileLink to="/projects">
                <FaCode />
            </MobileLink>
            <MobileLink to="/work">
                <FaBorderAll />
            </MobileLink>
            <MobileLink to="/education">
                <FaBook />
            </MobileLink>
        </NavWrapper>
    </Container>
  )
}

export default MobileNav