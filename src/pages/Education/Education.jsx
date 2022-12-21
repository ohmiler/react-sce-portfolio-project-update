import React from 'react'
import Layout from '../../components/Layout'
import { SectionTitle, Paragraph } from '../../styles'
import { Container, EducationItem, Institution, Degree } from './styles'

function Education({ user }) {
  return (
    <Layout user={user}>
        <Container>
            <SectionTitle>Education</SectionTitle>
            <ul>
                {user.education.map((education, i) => (
                    <EducationItem key={i}>
                        <Institution>{education.position}</Institution>
                        <div>
                            <Degree>
                                {education.studyType},
                                {education.area}
                            </Degree>
                            <span>&sdot;</span>
                            <span>
                                {education.start.year} to {education.end.year}
                            </span>
                        </div>
                        <Paragraph>{education.description}</Paragraph>
                    </EducationItem>
                ))}
            </ul>
        </Container>
    </Layout>
  )
}

export default Education
