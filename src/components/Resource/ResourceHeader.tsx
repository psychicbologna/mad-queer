import { Heading } from '../Utils'

interface IProps {
  title: string
  subtitle: string
  authors: string[]
  pageCount: number
  type: 'blog' | 'pocket-pop-ed'
}

const ResourceHeader = ({
  title,
  subtitle,
  authors,
  pageCount,
  type
}: IProps): JSX.Element => {
  return (
    <div className="ResourceHeader">
      <Heading size={4}>{title}</Heading>
      <Heading size={5}>{subtitle}</Heading>
      <p className="text-xl">By {authors[0]}</p>
      <p className="text-xl">{type}</p>
      <p>{!!pageCount ? `Pages: ${pageCount}` : null}</p>
    </div>
  )
}

export default ResourceHeader
