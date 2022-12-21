import React from 'react'
import { useLocation } from 'react-router-dom'

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles'

const UserHeader = ({ user }) => {

    const location = useLocation();

    return (
        <HeaderContainer isHome={location.pathname === '/'}>
            <Header>
                <Image src={user.basics.picture} />
            <div>
                <h2>{user.basics.name}</h2>
                <h4>
                    <a 
                        href={`https://gitconnected.com/${user.basics.username}`}
                        target="_blank"
                        rel="noreferrer noopenner"
                    >
                        @{user.basics.username}
                    </a>
                </h4>
                <br />
                <p>{user.basics.label}</p>
                <p>Coding in {user.basics.region}</p>
                <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
                <p>{user.basics.headline}</p>
                <p>Blog : <a href={user.basics.blog} target="_blank" rel="noreferrer noopenner">{user.basics.blog}</a></p>
                <ViewResumeLink
                href={`https://gitconnected.com/${user.basics.username}/resume`}
                target="_blank"
                rel="noopener noreferrer"
                >
                <span>View Resume </span>
                </ViewResumeLink>
            </div>
            </Header>
            
        </HeaderContainer>
    )
}

export default UserHeader