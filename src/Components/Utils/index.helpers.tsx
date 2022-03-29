import { ILocalLink, IExternalLink } from "./index.types";
import { LocalLink, ExternalLink } from "./Links/Links";

//Sorts a given link depending on whether it has a 'to' or 'src' property
//TODO maybe there can be better logic for this one, regex Ideally we shouldn't have jsx around here
export const sortLink = (link: ILocalLink | IExternalLink): JSX.Element | undefined => {
    if ('to' in link) {
        return (<LocalLink {...link}>{link.children}</LocalLink>)
    }
    if ('src' in link) {
        return (<ExternalLink {...link}>{link.children}</ExternalLink>)
    } else {
        return;
    }
}