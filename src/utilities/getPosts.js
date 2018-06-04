import matter from 'gray-matter'
import md from '../content/posts/*.md'

export default () => {
  console.log(md)
  let posts = {}
  posts = Object.keys(md).map( post => matter(md[post]))
  console.log(posts)
  return posts
}
