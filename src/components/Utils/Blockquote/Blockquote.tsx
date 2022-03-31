import { IBlockquote } from "../index.types"
import { sortLink } from "../index.helpers"
import './Blockquote.css'

//TODO add images

//Returns a blockquote surrounded by a figure, an emphasized, block-level quote for landing pages.
export const FeatureBlockquote = ({ text, author, link, className }: IBlockquote): JSX.Element => {
    return (
        <figure className={`FeatureBlockquoteFigure ${className}`} >
            <div className='FeatureBlockquoteDiv'>
                <blockquote className="FeatureBlockquoteQuote" >
                    {text}
                </blockquote>
                <figcaption className="FeatureBlockquoteFigcaption">
                    {/* If there's a link, prints the link alongside the author's name, else just prints the author's name. */}
                    - {!link ? { author } : `${author}, `}{!link ? null : sortLink(link)}
                </figcaption>
            </div>
        </figure>
    )
}

//A blockquote that appears more organically in a block of copy or article. Has an param for an optional 'citation' link.
export const InlineBlockQuote = ({ }) => { }

//A blockquote, very similar to the FeatureBlockquote but more specifically designated as a testimonial for advertising.
//TODO Maybe later this can have more SEO tricks attached to it; includes ratings and reviews?
export const Testimonial = ({ text, author, link }: IBlockquote) => { }