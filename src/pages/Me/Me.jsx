import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { Container, ProfileUl, ProfileLink } from './styles';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <Container>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map(skill => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ProfileUl>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && ' | '}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ProfileUl>
      </div>
      </Container>
    </Layout>
  );
};

export default Me;