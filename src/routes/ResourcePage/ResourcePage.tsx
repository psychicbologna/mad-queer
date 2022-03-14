import { useEffect, useState } from "react";
import ResourceList from '../../components/Resource/ResourceList';
import { Resource } from '../../services/APIResponsesTypes';
import ResourceAPI from '../../services/ResourceAPI';
import { Heading } from '../../components/Utils';

//TODO Create a transcript version of each resource, maybe using markdown and a transformer in parcel.
//TODO Create a test for the fetchResourceList API Call

const ResourcePage = (): JSX.Element => {
    const [resourceList, setResourceList] = useState([] as Resource[])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<null | Error>(null);

    useEffect(() => {
        void requestResources();
    }, [])

    const requestResources = async () => {
        if (!!isLoading) {
            const list = await ResourceAPI.fetchResourceList();
            if (list.length > 0) {
                setResourceList(list);
                return toggleIsLoading();
            } else {
                setError(new Error('Browser unable to retrieve list.'));
                return toggleIsLoading();
            }
        }
    }

    const toggleIsLoading = (): boolean => {
        setIsLoading(!isLoading);
        return isLoading;
    }

    const loadContent = () => {
        if (!!isLoading) {
            return <p>Loading Element...</p>
        }
        if (resourceList.length > 0) {
            return (<ResourceList resourceList={resourceList} />)
        }
        if (error) {
            return (<p> Error: {error.message} </p>)
        } else {
            return null;
        }
    }

    return (
        <div className="ResourcePage">
            <Heading size={3}>Resources</Heading>
            <div className="ResourceListContainer">
                {loadContent()}
            </div>
        </div>
    )
}

export default ResourcePage;