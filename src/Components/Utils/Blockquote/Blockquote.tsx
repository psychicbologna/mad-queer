import { IBlockquote } from "../index.types"
import { sortLink } from "../index.helpers"

export const Blockquote = ({ text, author, link }: IBlockquote): JSX.Element => {

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
