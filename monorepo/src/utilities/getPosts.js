import matter from 'gray-matter'
import md from '../content/posts/*.md'

export default () => {
  let posts = {}
  posts = Object.keys(md).map( post => matter(md[post]))
  return posts
}
