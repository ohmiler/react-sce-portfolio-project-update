import React from 'react'
import { StyledSideNav, StyledUl, StyledLi, StyledLink } from './styles'
import { FaHouseUser, FaCode, FaBorderAll, FaBook } from 'react-icons/fa'

const items = [
    { name: 'Me', path: '/', icon: <FaHouseUser /> },
    { name: 'Projects', path: '/projects', icon: <FaCode /> },
    { name: 'Work', path: '/work', icon: <FaBorderAll /> },
    { name: 'Education', path: '/education', icon: <FaBook />  },
]

function Sidebar() {
  return (
    <StyledSideNav>
        <StyledUl>
            {items.map(i => (
                <StyledLi key={i.name}><StyledLink to={i.path}>{i.icon} {i.name}</StyledLink></StyledLi>
            ))}
        </StyledUl>
    </StyledSideNav>
  )
}

export default Sidebar