import { LinkProps } from 'react-router-dom';

export interface ILink {
    children?: React.ReactNode,
    text?: string,
    postscript?: string,
    className?: string,
}

export interface ILocalLink extends ILink {
    to: LinkProps["to"] | string,
}

export interface IExternalLink extends ILink {
    src: string;
}

export interface ILinkList {
    list: (ILocalLink | IExternalLink)[]
};