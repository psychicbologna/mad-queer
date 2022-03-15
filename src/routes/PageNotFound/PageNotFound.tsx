import { Page } from "../../components/layout";
import { IPage } from "../../components/layout/index.types";
import { Heading } from "../../components/Utils";
import './PageNotFound.css';

export const PageNotFound = () => {
    const pageMeta: IPage["meta"] = {
        title: 'Page Not Found',
        description: 'Missing page',
        author: 'Elliott Fukui'
    };
    return (
        <Page className="PageMissing" meta={pageMeta}>
            <Heading size={3}>Page Missing</Heading>
            <p>Sorry, the page you were looking for is missing or inaccessable. Please return to the main page or contact us if you think something is wrong.</p>
        </Page>
    )
}