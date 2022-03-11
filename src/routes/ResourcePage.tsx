import { useEffect, useState } from "react";
import ResourceList from '../components/Resource/ResourceList';
import { Resource } from '../services/APIResponsesTypes';
import ResourceAPI from '../services/ResourceAPI';

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
            <div className="ResourceListContainer">
                <ResourceList resourceList={state.resourceList} />
            </div>
        </div>
    )
}

export default ResourcePage;