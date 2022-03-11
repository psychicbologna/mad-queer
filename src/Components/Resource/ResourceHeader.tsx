
interface IProps {
    title: string,
    subtitle: string,
    authors: string[],
    pageCount: number,
    type: "blog" | "pocket-pop-ed",
}

const ResourceHeader = ({ title, subtitle, authors, pageCount, type }: IProps): JSX.Element => {
    return (
        <div className="ResourceHeader bg-slate-800">
            <h1 className="text-3xl">{title}</h1>
            <h2 className="text-2xl">{subtitle}</h2>
            <h4 className="text-xl">By {authors[0]}</h4>
            <h3 className="text-xl">{type}</h3>
            {!!pageCount ? <p> Pages: {pageCount}</p> : <p>Throw error for pagecount</p>}
        </div>)
}

export default ResourceHeader;