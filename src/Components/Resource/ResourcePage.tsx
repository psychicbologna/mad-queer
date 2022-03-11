import { useEffect, useState } from "react";
import ResourceList from './ResourceList';
import { Resource } from '../APIResponsesTypes';
import ResourceAPI from '../../ResourceAPI';

const ResourcePage = (): JSX.Element => {
    const [state, setState] = useState<{ resourceList: Resource[] }>({
        resourceList: [] as Resource[]
    })

    useEffect(() => {
        void requestResources();
    }, [])

    const requestResources = async () => {
        const res = await ResourceAPI.fetchResourceList() as Resource[];
        void setState({ resourceList: res });
    }

    return (
        <div className="ResourcePage">
            <h3 className="text-2xl">Resources</h3>
            <ResourceList resourceList={state.resourceList} />
        </div>
    )
}

export default ResourcePage;