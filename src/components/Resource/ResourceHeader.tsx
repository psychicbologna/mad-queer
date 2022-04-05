import { Heading } from '../Utils'
import { typeLister } from './resource.helpers'

interface IProps {
  title: string
  subtitle: string
  authors: string[]
  type: readonly string[]
  link: string
}

const ResourceHeader = ({
  title,
  subtitle,
  authors,
  type,
  link
}: IProps): JSX.Element => {
  return (
    <div className="ResourceHeader">
      <a href={link} target="_blank"><Heading size={4}>{title}</Heading></a>
      <Heading size={5}>{subtitle}</Heading>
      <p className="ResourceAuthors">By {authors.join(', ')}</p>
      <ul className="ResourceTypeList">{typeLister(type, 'ResourceType')}</ul>
    </div>
  )
}

export default ResourceHeader
