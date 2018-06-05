import React, { Fragment } from 'react'
import styled from 'react-emotion'
import ReactMarkdown from 'react-markdown'
import getPost from '../utilities/getPosts'

//style
const Details = styled('details')`
  margin: 0 1em;
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
            {posts[post].data.title}
          </summary>
          <ReactMarkdown
            source={posts[post].content}
          />
        </Details>
      )}
    </Fragment>
  )
}
