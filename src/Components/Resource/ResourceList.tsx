import { Resource as IResource } from "../APIResponsesTypes";
import Resource from './Resource';

interface IProps {
    resourceList: IResource[] | null
}

const ResourceList = ({ resourceList }: IProps): JSX.Element => {
    return (
        <ul className="ResourceList">
            {!resourceList
                ? <li>No resources found</li>
                : resourceList.map((resource: IResource) => {
                    return <Resource {...resource} />
                })}
        </ul >
    )
}

export default ResourceList;