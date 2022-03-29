import { IHeading } from "../index.types";

//Heading
/* Using the component Heading instead of <h> tags is a bit more verbose, but lets me chain together/override classes more easily. Only runs up to 5 levels of headings, otherwise defaults to <h1>.*/
export const Heading = ({ size, children, className }: IHeading): JSX.Element => {
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