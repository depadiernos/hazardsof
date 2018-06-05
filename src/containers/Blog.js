import React, { Fragment } from 'react'
import styled from 'react-emotion'
import ReactMarkdown from 'react-markdown'
import getPost from '../utilities/getPosts'

//style
const Details = styled('details')`
  margin: 0 3em;
  summary {
    list-style: none;
    cursor: pointer;
    &::-webkit-details-marker {
    display: none;
  }
  }
`

//component
export default () => {
  const posts = getPost()
  console.log(posts)
  return(
    <Fragment>
      {Object.keys(posts).map(
        (post, index) =>
        <Details key={index}>
          <summary>
            <h2>{posts[post].data.title}</h2>
          </summary>
          <ReactMarkdown
            source={posts[post].content}
          />
        </Details>
      )}
    </Fragment>
  )
}
