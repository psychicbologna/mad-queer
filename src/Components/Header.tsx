import { FunctionComponent } from "react";

const Header: FunctionComponent = ({ children }) => {
    return (
        <div className="Header flex-col gap-10 p-10">
            <h1 className="text-5xl pb-5">Mad Queer Organization Strategies</h1>
            <h2 className="text-3xl">Liberation for Every Body</h2>
        </div>
    )
}

export default Header