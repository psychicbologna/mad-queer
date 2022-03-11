
interface IProps {
    title: string,
    subtitle: string,
    authors: string[],
    pageCount: number,
    type: "blog" | "pocket-pop-ed",
}

const ResourceHeader = ({ title, subtitle, authors, pageCount, type }: IProps): JSX.Element => {
    return (
        <div className="ResourceHeader">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h3>{type}</h3>
            <h4>By {authors[0]}</h4>
            {!!pageCount ? <p> Pages: {pageCount}</p> : <p>Throw error for pagecount</p>}
        </div>)
}

export default ResourceHeader;