import { useEffect, useState } from "react";
import ResourceList from './ResourceList';
import { Resource } from '../APIResponsesTypes';
import ResourceAPI from '../../ResourceAPI';

const ResourcePage = (): JSX.Element => {
    const [state, setState] = useState<{ resourceList: Resource[] }>({
        resourceList: [] as Resource[]
    })

    //TODO useEffect() for setting fetchResources() in state
    useEffect(() => {
        void requestResources();
    }, [])

    const requestResources = async () => {
        const res = await ResourceAPI.fetchResourceList() as Resource[];
        void setState({ resourceList: res });
    }

    return (
        <ResourceList resourceList={state.resourceList} />
    )
}

export default ResourcePage;