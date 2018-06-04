import matter from 'gray-matter'
import filesystem from 'file-system'

export default () => {
  const posts = __dirname + '../content/posts'
  const data = filesystem.recurse(posts)
  return data
}
