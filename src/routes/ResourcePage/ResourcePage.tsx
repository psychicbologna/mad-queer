import { useEffect, useState } from "react";
import ResourceList from '../../components/Resource/ResourceList';
import { Resource } from '../../services/APIResponsesTypes';
import ResourceAPIServices from '../../services/ResourceAPI';
import { Heading } from '../../components/Utils';
import { Page } from "../../components/layout";
import { IPage } from "../../components/layout/index.types";
import ErrorBoundary from "../../services/ErrorBoundary";

//TODO Create a transcript version of each resource, maybe using markdown and a transformer in parcel.
//TODO Create a test for the fetchResourceList API Call

const handleApiCall = async (list: Resource[], apiService: () => Promise<void | Resource[]>, handleToggle: () => boolean, handleSetList: React.Dispatch<React.SetStateAction<Resource[]>>, handleError: React.Dispatch<React.SetStateAction<Error | null>>) => {
    try {
        const list = await apiService();
        if (list && list.length > 0) {
            handleSetList(list);
        }
    } catch {
        handleError(new Error('Something went wrong retrieving the items'));
    }
    return handleToggle();
}

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
        void handleApiCall(resourceList, ResourceAPIServices.fetchAll, toggleIsLoading, setResourceList, setError);
    }, [])

    const toggleIsLoading = (): boolean => {
        setIsLoading(!isLoading);
        return isLoading;
    }

    const loadContent = (list: Resource[]) => {
        if (!!isLoading && list && list.length === 0) {
            return <p>Loading Element...</p>
        }
        if (!isLoading) {
            if (list && list.length > 0) {
                return (<ResourceList resourceList={resourceList} />)
            }
            if (list && list.length === 0 && !error) {
                return (<p> There are no resources available. </p>)
            }
            if (error) return <p>{`Error: ${error.message}`}</p>
        }
    }

    return (
        <ErrorBoundary>
            <Page className="Resources" meta={pageMeta}>
                <Heading size={3}>Resources</Heading>
                <div className="ResourceListContainer">
                    {loadContent(resourceList)}
                </div>
            </Page>
        </ErrorBoundary>
    )
}
