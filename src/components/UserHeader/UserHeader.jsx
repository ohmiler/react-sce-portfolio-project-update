import React from 'react'
import { HeaderContainer, Header, Image, ViewResumeLink } from './styles'
import { useLocation } from 'react-router-dom'

function UserHeader({ user }) {

    const location = useLocation();

  return (
    <HeaderContainer>
        <Header isHome={location.pathname === '/'}>
            <Image src={user?.basics?.image} alt="" />
            <div>
                <h2>{user?.basics?.name}</h2>
                <h4>
                    <a href={`https://gitconnected.com/${user?.basics?.username}`}>
                        @{user?.basics?.username}
                    </a>
                </h4>
                <br />
                <p>{user?.basics?.label}</p>
                <p>Coding in {user?.basics?.region}</p>
                <p>{user?.basics?.yearsOfExperience} years of experience as a developer.</p>
                <p>{user?.basics?.headline}</p>
                <p>Blog : <a href={user?.basics?.blog} target="_blank" rel="noreferrer">{user?.basics?.blog}</a></p>
                <ViewResumeLink href={`https://gitconnected.com/${user?.basics?.username}/resume`}>
                    View Resume
                </ViewResumeLink>
            </div>
        </Header>
    </HeaderContainer>
  )
}

export default UserHeader