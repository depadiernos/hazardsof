import matter from 'gray-matter'
import fs from 'fs'
import uploads from '../content/uploads/'

export default () => {
  let data = {}
  fs.readdirSync(uploads).map(file => {
    data = {...data, file}
    console.log(file)
  })
  console.log(data)
  return data
}
