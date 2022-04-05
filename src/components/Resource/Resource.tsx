import { Resource as IResource } from '../../services/APIResponsesTypes'
import ResourceHeader from './ResourceHeader'
import ResourceBody from './ResourceBody'
import './Resource.css'

const Resource = ({
  title,
  subtitle,
  description,
  authors,
  type,
  image,
  link
}: IResource): JSX.Element => {
  const headerProps = { title, subtitle, authors, type, link }
  const bodyProps = { description, image, link }
  return (
    <li className="Resource">
      <ResourceHeader {...headerProps} />
      <ResourceBody {...bodyProps} />
    </li>
  )
}

export default Resource
