import { useEffect, useState } from "react";
import ResourceList from '../../components/Resource/ResourceList';
import { Resource } from '../../services/APIResponsesTypes';
import ResourceAPI from '../../services/ResourceAPI';
import { Heading } from '../../components/Utils';
import { Page } from "../../components/layout";
import { IPage } from "../../components/layout/index.types";

//TODO Create a transcript version of each resource, maybe using markdown and a transformer in parcel.
//TODO Create a test for the fetchResourceList API Call

export const ResourcesPage = (): JSX.Element => {
    const pageMeta: IPage["meta"] = {
        title: 'Resources',
        description: 'Need more than what you find here? Here are additional resources to look at.',
        author: 'Elliott Fukui'
    };

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
        <Page className="Resources" meta={pageMeta}>
            <Heading size={3}>Resources</Heading>
            <div className="ResourceListContainer">
                {loadContent()}
            </div>
        </Page>
    )
}