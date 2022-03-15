import { ILocalLink, IExternalLink } from '../index.types';

export interface IBlockquote {
    text: string,
    author: string,
    link?: ILocalLink | IExternalLink,
    className?: string
}