import { image } from "../APIResponsesTypes";

interface IProps {
    description: string,
    image: image
}

const ResourceBody = ({ description, image }: IProps): JSX.Element => {
    return (
        <div className="ResourceBody">
            <img src={image.url} alt={image.alt} />
            <p className="description">{description}</p>
        </div>
    )
}

export default ResourceBody;