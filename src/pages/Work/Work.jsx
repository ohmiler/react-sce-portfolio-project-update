import React from 'react'
import Layout from '../../components/Layout'
import { Container, WorkItem, WorkTitle, JobTitle } from './styles'
import { SectionTitle, Paragraph } from '../../styles'

function Work({ user }) {
  return (
    <Layout user={user}>
        <Container>
            <SectionTitle>Work</SectionTitle>
            <ul>
                {user?.work?.map((work, i) => (
                    <WorkItem key={i}>
                        <WorkTitle>{work.position}</WorkTitle>
                        <div>
                            <JobTitle>{work.company}</JobTitle>
                            <p>{work.location}</p>
                            <p>{work.start.year} to {work.end.year}</p>
                        </div>
                        <Paragraph>{work.summary}</Paragraph>
                    </WorkItem>
                ))}
            </ul>
        </Container>
    </Layout>
  )
}

export default Work