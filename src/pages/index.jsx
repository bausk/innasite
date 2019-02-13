/* eslint react/display-name: 0 */
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { useTrail } from 'react-spring'
import styled from 'styled-components'
import { Layout, ProjectItem } from '../components'

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: 100%;
`

const Index = ({
  data: {
    allContentfulProject: {
      edges
    },
  },
  location
}) => {
  const trail = useTrail(edges.length, {
    from: { height: '0%' },
    to: { height: '100%' },
  })

  return (
    <Layout pathname={location.pathname}>
      <ListWrapper>
        {trail.map((style, index) => (
          <ProjectItem
            testid={`projectItem-${index}`}
            style={style}
            key={edges[index].node.slug}
            node={edges[index].node}
          />
        ))}
      </ListWrapper>
    </Layout>
  )
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  location: PropTypes.object.isRequired,
}


export const pageQuery = graphql`
{
  allContentfulProject {
    edges {
      node {
        id
        title
        slug
        description {
          description
        }
        cover {
          fluid {
            src 
            tracedSVG
          }
          file {
            url
          }
        }
        date
      }
    }
  }
}
`
