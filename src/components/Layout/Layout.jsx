import React from 'react'
import { Container, StyledContent } from './styles'
import Sidebar from '../Sidebar'
import UserHeader from '../UserHeader'
import MobileNav from '../MobileNav'

function Layout({ user, children }) {
  return (
    <>
        <MobileNav />
        <Container>
            <Sidebar />
            <StyledContent>
                <UserHeader user={user} />
                <div>
                    {children}
                </div>
            </StyledContent>
        </Container>   
    </>
  )
}

export default Layout