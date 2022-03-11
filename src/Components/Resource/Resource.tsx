import { Resource as IResource } from '../APIResponsesTypes';
import ResourceHeader from './ResourceHeader';

const Resource = ({ title, subtitle, description, authors, pageCount, type, image }: IResource): JSX.Element => {
    const headerProps = { title, subtitle, authors, pageCount, type }
    return (
        <li className="Resource">
            <ResourceHeader {...headerProps} />
            {/* TODO Build Resource Body */}
            {/* <ResourceBody /> */}
        </li>
    )
}

export default Resource;