import React from 'react'
import styled from 'react-emotion'
import ReactMarkdown from 'react-markdown'

import getPost from '../utilities/getPosts'

export default () => {
  const posts = getPost()
  return(
    <div>
      {Object.keys(posts).map( (post, index) => <ReactMarkdown key={index} source={posts[post].content}/> )}
    </div>
  )
}
