import { Heading } from "../../components/Utils";
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="PageMissing">
            <Heading size={3}>Page Missing</Heading>
            <p>Sorry, the page you were looking for is missing or inaccessable. Please return to the main page or contact us if you think something is wrong.</p>
        </div>
    )
}

export default PageNotFound;