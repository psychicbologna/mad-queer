import { IPage } from '../index.types';
import { Helmet } from 'react-helmet-async';

export const Page = ({ className, children, meta }: IPage) => {

    const pageMeta = () => {
        return (
            <Helmet>
                <title>{meta.title === null ? 'Mad Queer Organizing Strategies' : `Mad Queer Organizing Strategies | ${meta.title}`}</title>
                <meta name="description" content={meta.description} />
                {meta.keywords ? <meta name="keywords" content={meta.keywords.join(', ')} /> : null}
                {meta.author ? <meta name="author" content={meta.author} /> : null}
            </Helmet>
        )
    }

    return (
        <div className={`Page ${className}`}>
            {pageMeta()}
            {children}
        </div>
    )
}