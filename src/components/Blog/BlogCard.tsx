import { IBlog } from './index.types'
import { BlogCardHeader } from './'

const blogImage = new URL('../../assets/blog/dummy.bmp', import.meta.url)

export const BlogCard = ({
  id,
  title,
  description,
  postDate,
  updateDate,
  authors,
  content,
  tags
}: IBlog) => {
  const headerProps = { title, postDate, updateDate, authors, tags }

  return (
    <div className="BlogCard">
      <BlogCardHeader {...headerProps} />
      <img src={blogImage.href} />
      <main>{description}</main>
    </div>
  )
}
