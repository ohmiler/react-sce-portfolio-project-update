import React from 'react'
import Layout from '../../components/Layout'
import { Container, EducationItem, Degree } from './styles'
import { SectionTitle, Paragraph } from '../../styles'

function Education({ user }) {
  return (
    <Layout user={user}>
        <Container>
            <SectionTitle>Education</SectionTitle>
            <ul>
                {user?.education?.map((education, i) => (
                    <EducationItem key={i}>
                        <Degree>
                            <p>{education.studyType}, {education.area}</p>
                            <span>&sdot;</span>
                            <p>{education.start.year} to {education.end.year}</p>
                        </Degree>
                        <Paragraph>{education.description}</Paragraph>
                    </EducationItem>
                ))}
            </ul>
        </Container>
    </Layout>
  )
}

export default Education