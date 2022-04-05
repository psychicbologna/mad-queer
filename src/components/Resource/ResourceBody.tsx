import { image } from '../../services/APIResponsesTypes'

interface IProps {
  description: string
  image: image
  link: string
}

const ResourceBody = ({ description, image, link }: IProps): JSX.Element => {
  return (
    <div className="ResourceBody">
      <a href={link} target="_blank"><img className="ResourceImage" src={image.url} alt={image.alt} /></a>
      <p className="description">{description}</p>
    </div>
  )
}

export default ResourceBody
