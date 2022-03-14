import { ILocalLink, IExternalLink, ILinkList } from './Links.types';
import { sortLink } from '../index.helpers';
import { Link } from 'react-router-dom';

//Links
export const LocalLink = ({ to, text, children, postscript, className }: ILocalLink): JSX.Element => {
    return (
        <>
            <Link to={to} className={`TextLink text-rose-300 text-decoration-line: underline underline-offset-4 ${className}`}>
                {text || children || 'link'}
            </Link>
            {postscript ? <p> - {postscript}</p> : null}
        </>
    )
}

export const ExternalLink = ({ src, text, children, postscript, className }: IExternalLink): JSX.Element => {
    return (
        <>
            <a href={src} className={`TextLink text-rose-300 text-decoration-line: underline underline-offset-4 ${className}`}>
                {text || children || 'link'}
            </a>
            {postscript ? <p> - {postscript}</p> : null}
        </>
    )
}

export const TextLinkList = ({ list }: ILinkList): JSX.Element => {
    return (
        <ul>
            {list.map((link: ILocalLink | IExternalLink) => {
                return (<li>
                    {sortLink(link)}
                </li>
                )
            })}
        </ul>
    )
}