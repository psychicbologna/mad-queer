import { Resource as IResource } from "../../services/APIResponsesTypes";
import Resource from './Resource';

interface IProps {
    resourceList: IResource[] | null
}

const ResourceList = ({ resourceList }: IProps): JSX.Element => {
    return (
        <ul className="ResourceList grid grid-cols-2 gap-4">
            {!resourceList
                ? <li>No resources found</li>
                : resourceList.map((resource: IResource) => {
                    return <Resource {...resource} key={resource.id} />
                })}
        </ul >
    )
}

export default ResourceList;