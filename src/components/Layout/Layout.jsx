import React from 'react'
import MobileNav from '../MobileNav';
import Sidebar from '../Sidebar'
import UserHeader from '../UserHeader';

import { StyledContent, Container } from './styles'

function Layout({ user, children }) {
  return (
    <>
        <MobileNav />
        <Container>
        <Sidebar />
            <StyledContent>
                <UserHeader user={user} />
                <div>{children}</div>   
            </StyledContent>
        </Container>
    </>
  )
}

export default Layout