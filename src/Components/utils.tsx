import { Link, LinkProps } from 'react-router-dom';

//DOM helpers
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

export interface ILinkList {
    list: (ILocalLink | IExternalLink)[]
};

const sortLink = (link: ILocalLink | IExternalLink): JSX.Element | undefined => {
    if ('to' in link) {
        return (<LocalLink {...link}>{link.children}</LocalLink>)
    }
    if ('src' in link) {
        return (<ExternalLink {...link}>{link.children}</ExternalLink>)
    } else {
        return;
    }
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

export interface BlockquoteProps {
    text: string,
    author: string,
    link?: ILocalLink | IExternalLink
}

export const Blockquote = ({ text, author, link }: BlockquoteProps): JSX.Element => {

    return (
        <figure className='bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 max-w-lg' >
            <div className='pt-6 md:p-8 text-left space-y-4 max-w-2xl after:w-10 after:block after:h-10 after:bg-blockquote after:bg-no-repeat after:absolute after:top after:right'>
                <blockquote className="mr-1 block" >
                    {text}
                </blockquote>
                <figcaption className="text-amber-200 ">
                    {/* If there's a link, prints the link alongside the author's name, else just prints the author's name. */}
                    - {!link ? { author } : `${author}, `}{!link ? null : sortLink(link)}
                </figcaption>
            </div>
        </figure>
    )
}

//Heading
/* Using the component Heading instead of <h> tags is a bit more verbose, but lets me chain together/override classes more easily. Only runs up to 5 levels of headings, otherwise defaults to <h1>.*/
export interface HeadingProps {
    size?: 1 | 2 | 3 | 4 | 5,
    children?: React.ReactNode,
    className?: string,
}

export const Heading = ({ size, children, className }: HeadingProps): JSX.Element => {
    {
        switch (size) {
            case 1:
            default:
                return (<h1 className={`text-5xl ${className || ""}`}>{children || "H1"}</h1>);
            case 2:
                return (<h2 className={`text-4xl ${className || ""}`}>{children || "H2"}</h2>);
            case 3:
                return (<h3 className={`text-3xl ${className || ""}`}>{children || "H3"}</h3>);
            case 4:
                return (<h4 className={`text-2xl ${className || ""}`}>{children || "H4"}</h4>);
            case 5:
                return (<h5 className={`text-1xl ${className || ""}`}>{children || "H5"}</h5>);
        }
    }
}

interface ILinkButton {
    href: string,
    className?: string,
    children?: React.ReactNode
}

export const LinkButton = ({ href, className, children }: ILinkButton): JSX.Element => {
    const props = { className: `LinkButton ${className}` }
    return (
        <a href={href}>
            <div {...props}>
                {children}
            </div>
        </a>
    )
}