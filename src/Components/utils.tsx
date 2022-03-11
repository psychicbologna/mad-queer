import { Link } from 'react-router-dom';

interface TextLinkProps {
    src: string,
    text: string
}

export const TextLink = (link: TextLinkProps): JSX.Element => {
    return (
        <Link to={link.src} className="text-rose-300 text-decoration-line: underline underline-offset-4">
            {link.text}
        </Link>
    )

}

interface BlockquoteProps {
    text: string,
    author: string,
    link?: TextLinkProps
}

export const Blockquote = (props: BlockquoteProps): JSX.Element => {
    return (
        <figure className='bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 max-w-lg' >
            <div className='pt-6 md:p-8 text-left space-y-4 max-w-2xl after:w-10 after:block after:h-10 after:bg-blockquote after:bg-no-repeat after:absolute after:top after:right'>
                <blockquote className="mr-1 block" >
                    {props.text}
                </blockquote>
                <figcaption className="text-amber-200 ">
                    {/* If there's a link, prints the link alongside the author's name, else just prints the author's name. */}
                    - {!props.link ? `author` : `${props.author}, `}{!props.link ? null : <TextLink src={props.link.src} text={props.link.text} />}
                </figcaption>
            </div>
        </figure>
    )
}