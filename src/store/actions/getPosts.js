import matter from 'gray-matter'
import { md } from '../../content/posts'
// import jpg from '../../content/uploads/*.jpg'

export default () => {
  console.log(md)
  let posts = {}
  posts = Object.keys(md).map( post => matter(md[post]))
  return posts
}
