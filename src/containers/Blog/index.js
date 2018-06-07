import React, { Fragment } from 'react'
import styled from 'react-emotion'
import ReactMarkdown from 'react-markdown'
import moment from 'moment';
import getPost from '../../store/actions/getPosts'
import img from '../../content/uploads'

//style
const Details = styled('details')`
  margin: 0 auto;
  max-width: 1000px;
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
  return(
    <Fragment>
      {Object.keys(posts).map(
        (post, index) =>
        <Details key={index}>
          <summary>
            <img src={posts[post].data.thumbnail} />
            <h2>{posts[post].data.title}</h2>
            {moment(posts[post].data.date).format('MM-DD-YYYY')}
          </summary>
          <ReactMarkdown
            source={posts[post].content}
          />
        </Details>
      )}
    </Fragment>
  )
}
