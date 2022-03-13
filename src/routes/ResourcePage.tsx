import { useEffect, useState } from "react";
import ResourceList from '../components/Resource/ResourceList';
import { Resource } from '../services/APIResponsesTypes';
import ResourceAPI from '../services/ResourceAPI';
import { Heading } from '../components/utils';

//TODO Create a transcript version of each resource, maybe using markdown and a transformer in parcel.

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
            <Heading size={3}>Resources</Heading>
            <div className="ResourceListContainer">
                <ResourceList resourceList={state.resourceList} />
            </div>
        </div>
    )
}

export default ResourcePage;