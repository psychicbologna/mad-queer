import { Heading } from '../Utils'

interface IProps {
  title: string
  postDate: string
  updateDate?: string
  authors: string[]
  tags: string[]
}

export const BlogCardHeader = ({
  title,
  postDate,
  updateDate,
  authors,
  tags
}: IProps) => {
  return (
    <div className="BlogCardHeader">
      <Heading size={5}>{title}</Heading>
      <span>by {authors.join(', ')}</span>
      <span>
        Posted {postDate}
        {!!updateDate ? `, Last Updated ${updateDate}` : null}
      </span>
      {!!tags ? <span>{tags.join(', ')}</span> : null}
    </div>
  )
}
