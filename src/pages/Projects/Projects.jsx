import React from 'react'
import Layout from '../../components/Layout'
import { Container, ProjectItem, ProjectTitle, SkillContainer } from './styles'
import { SectionTitle, Pill } from '../../styles'

function Projects({ user }) {
  return (
    <Layout user={user}>
        <Container>
            <SectionTitle>Projects</SectionTitle>
            <ul>
                {user?.projects.map((project, i) => (
                    <ProjectItem key={i}>
                        <ProjectTitle>{project.name}</ProjectTitle>
                        <p>{project.summary}</p>
                        <SkillContainer>
                            {[...project.languages].map((item, j) => (
                                <Pill key={j}>{item}</Pill>
                            ))}
                        </SkillContainer>
                    </ProjectItem>
                ))}
            </ul>
        </Container>
    </Layout>
  )
}

export default Projects