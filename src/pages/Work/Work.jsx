import React from 'react'
import Layout from '../../components/Layout'

import { SectionTitle, Paragraph } from '../../styles'
import { Container, WorkItem, WorkTitle, JobTitle } from './styles'

function Work({ user }) {
  return (
    <Layout user={user}>
        <Container>
            <SectionTitle>Work</SectionTitle>
            <ul>
                {user.work.map((work, i) => (
                    <WorkItem key={i}>
                        <WorkTitle>{work.position}</WorkTitle>
                        <div>
                            <JobTitle>{work.company}</JobTitle>
                            <br />
                            <span>{work.location}</span>
                            <br />
                            <span>{work.start.year} to {work.end.year}</span>
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