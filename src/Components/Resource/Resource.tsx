import { Resource as IResource } from '../../services/APIResponsesTypes'
import ResourceHeader from './ResourceHeader'
import ResourceBody from './ResourceBody'

const Resource = ({
  title,
  subtitle,
  description,
  authors,
  pageCount,
  type,
  image
}: IResource): JSX.Element => {
  const headerProps = { title, subtitle, authors, pageCount, type }
  const bodyProps = { description, image }
  return (
    <li className="Resource">
      <ResourceHeader {...headerProps} />
      <ResourceBody {...bodyProps} />
    </li>
  )
}

export default Resource
